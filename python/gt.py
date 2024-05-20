from gtts import gTTS
import os
from playsound import playsound


def text_to_speech(text, lang='en', filename='output.mp3'):
    """
    Converts text to speech using Google Text-to-Speech and saves it to an MP3 file.

    :param text: The text to convert to speech.
    :param lang: The language to use for the speech. Default is English ('en').
    :param filename: The name of the output MP3 file. Default is 'output.mp3'.
    """
    try:
        tts = gTTS(text=text, lang=lang, slow=False)
        tts.save(filename)
        print(f"Saved TTS to {filename}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Example usage
    text = "Greetings! Ready to guide you through our campus."
    text_to_speech(text, lang='en', filename='output.mp3')
    filename = 'output.mp3'
    playsound(filename)
