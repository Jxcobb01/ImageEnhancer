# AI Image Enhancer

A full-stack web application for enhancing images using AI technology. Built with React.js, Tailwind CSS, and Python FastAPI.

## Project Structure

```
.
├── backend/
│   ├── app/
│   │   └── main.py
│   ├── tests/
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── styles/
    ├── public/
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Create a virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the backend server:
```bash
uvicorn app.main:app --reload
```

The backend server will run on http://localhost:8000

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Run the development server:
```bash
npm start
```

The frontend will run on http://localhost:3000

## Features

- Modern, responsive UI built with React and Tailwind CSS
- Drag-and-drop image upload
- Real-time image enhancement
- FastAPI backend for efficient image processing
- CORS enabled for secure frontend-backend communication

## Technologies Used

- Frontend:
  - React.js
  - Tailwind CSS
  - Axios for API calls
  - React Dropzone for file uploads

- Backend:
  - FastAPI
  - Python
  - Pillow for image processing
  - PyTorch for AI models