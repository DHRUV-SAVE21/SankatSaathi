from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import sys
import os
from pathlib import Path

# --- PATH CONFIGURATION ---
# Vercel and some local setups might run from root or backend/
# We ensure the 'backend' directory is in sys.path so 'Feature1' and 'Feature2_news' can be found.
current_file_path = Path(__file__).resolve()
backend_dir = current_file_path.parent
root_dir = backend_dir.parent

# Add backend_dir to sys.path if not present
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

# Also add root_dir just in case imports reference 'backend.FeatureX'
if str(root_dir) not in sys.path:
    sys.path.insert(0, str(root_dir))

# --- IMPORTS ---
try:
    # Try importing as top-level modules (standard local python backend/app.py run)
    from Feature1.crisis_dispatch import router as crisis_router
    print("SUCCESS: Crisis Router imported successfully")
except ImportError as e:
    print(f"Warning: Direct import of Feature1 failed: {e}. Trying absolute...")
    try:
        # Try absolute import (useful if running from root like 'python -m backend.app')
        from backend.Feature1.crisis_dispatch import router as crisis_router
        print("SUCCESS: Crisis Router imported successfully (absolute)")
    except ImportError as e2:
        print(f"CRITICAL: Could not import Crisis Router. {e2}")
        crisis_router = None

try:
    from Feature2_news.news_router import router as news_router
    print("SUCCESS: News Router imported successfully")
except ImportError as e:
    print(f"Warning: Direct import of Feature2_news failed: {e}. Trying absolute...")
    try:
        from backend.Feature2_news.news_router import router as news_router
        print("SUCCESS: News Router imported successfully (absolute)")
    except ImportError as e2:
        print(f"CRITICAL: Could not import News Router. {e2}")
        news_router = None


# --- APP SETUP ---
app = FastAPI(
    title="SankatSaathi API",
    version="1.1.0",
    description="Backend for SankatSaathi: Crisis Management & News Aggregation"
)

# CORS middleware
# Allow broad access for hackathon development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- ROUTING ---
# Mount routers if they were successfully imported

if crisis_router:
    # Standard API prefix
    app.include_router(crisis_router, prefix="/api") 
    # Fallback for some frontend calls that might miss /api prefix or Vercel rewrites
    app.include_router(crisis_router) 
else:
    print("ERROR: Crisis Router NOT mounted.")

if news_router:
    app.include_router(news_router, prefix="/api")
    app.include_router(news_router) # Fallback
else:
    print("ERROR: News Router NOT mounted.")


@app.get("/")
@app.get("/api")
async def root(request: Request):
    return {
        "message": "🚨 SankatSaathi API is Live",
        "status": "operational",
        "services": {
            "crisis_dispatch": "active" if crisis_router is not None else "failed",
            "news_aggregator": "active" if news_router is not None else "failed"
        },
        "env": "production" if os.getenv("VERCEL") else "local",
        "path": request.url.path
    }

@app.get("/api/health")
async def health():
    return {"status": "ok", "uptime": "good"}

if __name__ == "__main__":
    import uvicorn
    # Use standard host/port for local dev
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)