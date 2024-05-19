import asyncio
import websockets

async def send_receive():
    async with websockets.connect("ws://localhost:8766") as websocket:
        # Separate tasks for sending and receiving messages
        async def send():
            while True:
                message = input("Enter message to send: ")
                await websocket.send(message)
                print(f"Sent message to server: {message}")

        async def receive():
            while True:
                response = await websocket.recv()
                print(f"Received response from server: {response}")

        # Run sending and receiving concurrently
        await asyncio.gather(send(), receive())

# Run the client
asyncio.get_event_loop().run_until_complete(send_receive())
