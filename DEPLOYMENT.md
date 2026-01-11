# SankatSaathi Deployment Guide 🚀

This guide outlines the steps to deploy the SankatSaathi platform (Frontend + Backend) to a production environment.

## 1. Project Structure
- **/frontend**: React + Vite application (The User Interface)
- **/backend**: FastAPI Python application (The API & Logic)

---

## 2. Backend Deployment (Python/FastAPI)
*Recommended Platforms: Render, Railway, AWS App Runner, Heroku*

### Prerequisites
- Python 3.9+
- pip

### Steps
1. **Navigate to Backend**:
   ```bash
   cd backend
   ```

2. **Install Dependencies**:
   Ensure `requirements.txt` is present (it is).
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Variables**:
   Set the following variables in your cloud provider's dashboard:
   - `GEMINI_API_KEY`: Your Google Gemini API Key

4. **Start Command**:
   Use `uvicorn` for production.
   ```bash
   uvicorn app:app --host 0.0.0.0 --port 8000
   ```

---

## 3. Frontend Deployment (React/Vite)
*Recommended Platforms: Vercel, Netlify, AWS Amplify*

### Steps
1. **Navigate to Frontend**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create the production environment variables in your cloud provider:
   - `VITE_API_URL`: The URL of your deployed Backend (e.g., `https://sankatsaathi-api.onrender.com`)
   - `VITE_WS_URL`: The WebSocket URL of your backend (e.g., `wss://sankatsaathi-api.onrender.com`)
   - `VITE_GOOGLE_MAPS_API_KEY`: Your Google Maps Key
   - `VITE_SUPABASE_URL`: Your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase Anon Key

4. **Build**:
   This compiles the project into static files in the `dist/` folder.
   ```bash
   npm run build
   ```

5. **Deploy**:
   - **Vercel**: Link your GitHub repo, point user settings to `frontend` directory, and it handles the build automatically.
   - **Netlify**: Drag and drop the `dist` folder or connect via Git.

---

## 4. Local Production Test
To simulate a production environment locally:

1. **Start Backend**:
   ```bash
   cd backend
   python app.py
   # Or better: uvicorn app:app --host 0.0.0.0 --port 8000
   ```

2. **Serve Frontend**:
   ```bash
   cd frontend
   npm run build
   npx serve -s dist
   ```

## 5. Troubleshooting
- **CORS Errors**: If the frontend cannot talk to the backend, check `backend/app.py` and ensure `allow_origins` includes your frontend domain.
- **WebSocket Failures**: Ensure your hosting provider supports WebSockets (most modern ones do, typically on the same port as HTTP).
