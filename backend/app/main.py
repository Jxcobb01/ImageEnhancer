from fastapi import FastAPI, UploadFile, File, Response
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import numpy as np

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "AI Image Enhancer API"}

@app.post("/api/enhance")
async def enhance_image(file: UploadFile = File(...)):
    # Read the uploaded image
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))

    # Dummy enhancement: convert to grayscale (replace with real enhancement)
    enhanced_image = image.convert("L").convert("RGB")

    # Save to bytes
    buf = io.BytesIO()
    enhanced_image.save(buf, format="PNG")
    buf.seek(0)

    return Response(content=buf.read(), media_type="image/png") 