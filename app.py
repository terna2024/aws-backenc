from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import cv2
import time

app = FastAPI()

RTSP_URL = "rtsp://13.48.57.9:8554/live"  # ← your AWS stream

def generate_frames():
    cap = cv2.VideoCapture(RTSP_URL, cv2.CAP_FFMPEG)

    while True:
        success, frame = cap.read()

        # Auto-reconnect if stream drops
        if not success:
            cap.release()
            time.sleep(1)
            cap = cv2.VideoCapture(RTSP_URL, cv2.CAP_FFMPEG)
            continue

        ret, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n'
        )

@app.get("/video")
def video_feed():
    return StreamingResponse(
        generate_frames(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )