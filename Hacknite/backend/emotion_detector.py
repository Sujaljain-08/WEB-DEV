import cv2
import mediapipe as mp
from deepface import DeepFace
import numpy as np
import time

# Initialize MediaPipe
mp_face_detection = mp.solutions.face_detection
face_detection = mp_face_detection.FaceDetection(min_detection_confidence=0.7)

# Emotion Tracking Variables
emotion_times = {
    'angry': 0,
    'disgust': 0,
    'fear': 0,
    'happy': 0,
    'sad': 0,
    'surprise': 0,
    'neutral': 0,
    'unknown': 0
}
total_time = 0
last_emotion = "unknown"
last_time = time.time()

# Webcam Setup
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

if not cap.isOpened():
    print("Error: Webcam not detected or could not be opened.")
    exit()

# Emotion Detection with Live Preview
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        print("Error: Couldn't read the frame.")
        break

    frame = cv2.GaussianBlur(frame, (5, 5), 0)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    
    results = face_detection.process(rgb_frame)

    current_emotion = "unknown"
    
    if results.detections:
        for detection in results.detections:
            bboxC = detection.location_data.relative_bounding_box
            x, y, w, h = int(bboxC.xmin * frame.shape[1]), int(bboxC.ymin * frame.shape[0]), \
                         int(bboxC.width * frame.shape[1]), int(bboxC.height * frame.shape[0])

            padding = 20
            x, y = max(0, x - padding), max(0, y - padding)
            w, h = min(frame.shape[1] - x, w + 2 * padding), min(frame.shape[0] - y, h + 2 * padding)

            face_img = frame[y:y+h, x:x+w]

            try:
                resized_face = cv2.resize(face_img, (224, 224))
                analysis = DeepFace.analyze(resized_face, actions=['emotion'], enforce_detection=False)
                current_emotion = analysis[0]['dominant_emotion'].lower()
            except Exception:
                current_emotion = "unknown"

            cv2.putText(frame, f'Emotion: {current_emotion}', (x, y - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Track emotion time
    current_time = time.time()
    elapsed_time = current_time - last_time
    emotion_times[last_emotion] += elapsed_time
    total_time += elapsed_time
    last_time = current_time
    last_emotion = current_emotion

    # Display emotion times on screen
    y_offset = 30
    for emotion, time_spent in emotion_times.items():
        cv2.putText(frame, f'{emotion.capitalize()}: {time_spent:.2f} s', 
                    (10, y_offset), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)
        y_offset += 30

    # Display FPS
    cv2.putText(frame, f'FPS: {int(cap.get(cv2.CAP_PROP_FPS))}', (10, y_offset),
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 255), 2)

    cv2.imshow('📹 Live Preview - Emotion Detection', frame)

    # Exit on 'ESC' or 'Q'
    if cv2.waitKey(5) & 0xFF in [27, ord('q')]:
        break

# Display emotion times and percentages in the console
print("\n📊 **Emotion Analysis Summary**")
for emotion, time_spent in emotion_times.items():
    percentage = (time_spent / total_time) * 100 if total_time > 0 else 0
    print(f'{emotion.capitalize()}: {time_spent:.2f} s ({percentage:.2f}%)')

cap.release()
cv2.destroyAllWindows()