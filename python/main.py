
import asyncio
import websockets
import pyttsx3
import cv2
import signal
import logging
import time

# Initialize logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Initialize the text-to-speech engine
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)  # Change index to select a different voice if needed

# Configurable parameters
FACE_DETECTION_MODEL_PATH = 'D:/main project/ElectronGUI/python/haarcascade_frontalface_default.xml'
ACTIVATION_THRESHOLD = 2  # seconds for face detected debounce interval
DEACTIVATION_THRESHOLD = 10  # seconds for no face detected debounce interval
WEBSOCKET_URI = 'ws://localhost:8766'  # WebSocket URI
VIDEO_SOURCE = 0  # Default camera

# Global variable to manage graceful shutdown
shutdown_event = asyncio.Event()

# Store active WebSocket connections
clients = set()

async def detect_faces_in_video():
    # Load the pre-trained Haar Cascade classifier for face detection
    face_cascade = cv2.CascadeClassifier(FACE_DETECTION_MODEL_PATH)

    # Open the default camera (0)
    cap = cv2.VideoCapture(VIDEO_SOURCE)

    if not cap.isOpened():
        logging.error("Unable to open video source")
        return

    last_face_detected_time = None
    last_no_face_detected_time = None
    face_detected_flag = False

    while not shutdown_event.is_set():
        # Capture frame-by-frame
        ret, frame = await asyncio.to_thread(cap.read)
        if not ret:
            logging.error("Failed to read frame from video source")
            break

        # Convert the frame to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces in the grayscale frame
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        current_time = time.time()

        if len(faces) > 0:
            # Face detected
            if not face_detected_flag:
                if last_face_detected_time is None:
                    last_face_detected_time = current_time
                elif current_time - last_face_detected_time >= ACTIVATION_THRESHOLD:
                    logging.info("Face detected continuously for the activation threshold")
                    await send_message_to_clients('face detected')
                    face_detected_flag = True
                    last_no_face_detected_time = None
            else:
                last_face_detected_time = current_time  # Reset timer as face is still detected
        else:
            # No face detected
            if face_detected_flag:
                if last_no_face_detected_time is None:
                    last_no_face_detected_time = current_time
                elif current_time - last_no_face_detected_time >= DEACTIVATION_THRESHOLD:
                    logging.info("No face detected continuously for the deactivation threshold")
                    await send_message_to_clients('no face detected')
                    face_detected_flag = False
                    last_face_detected_time = None
            else:
                last_no_face_detected_time = current_time  # Reset timer as no face is still not detected



        # Break the loop when 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the capture
    cap.release()
    cv2.destroyAllWindows()

async def send_message_to_clients(message):
    if clients:  # Only send if there are connected clients
        await asyncio.wait([client.send(message) for client in clients])
        logging.info(f'Message sent to clients: {message}')
    else:
        logging.info(f'No clients to send message: {message}')

async def websocket_handler(websocket, path):
    # Register client connection
    clients.add(websocket)
    try:
        async for message in websocket:
            # Convert text to speech
            logging.info(f'Received message from client: {message}')
            engine.say(message)
            engine.runAndWait()
    except websockets.exceptions.ConnectionClosedError:
        logging.warning("WebSocket connection closed unexpectedly.")
    except Exception as e:
        logging.error(f"Error in WebSocket server: {e}")
    finally:
        # Unregister client connection
        clients.remove(websocket)

async def start_websocket_server():
    server = await websockets.serve(websocket_handler, "localhost", 8766)
    logging.info('WebSocket server started')
    await server.wait_closed()

def shutdown_handler(signum, frame):
    logging.info("Shutdown signal received. Shutting down...")
    shutdown_event.set()

async def main():
    # Register shutdown signal handlers
    signal.signal(signal.SIGINT, shutdown_handler)
    signal.signal(signal.SIGTERM, shutdown_handler)

    # Start the WebSocket server and face detection concurrently
    await asyncio.gather(start_websocket_server(), detect_faces_in_video())

if __name__ == "__main__":
    asyncio.run(main())
