# SankatSaathi - Production Deployment Guide

## 🚀 Quick Start

### Local Development

1. **Backend Setup**
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Backend runs on: http://localhost:8000

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:5173

---

## 🌐 Vercel Deployment

### Environment Variables

#### Backend (.env)
```env
GEMINI_API_KEY=AIzaSyALkD2_ii0EH8UTa9O0xBpW62FM_BYhKOM
SUPABASE_URL=https://wmjqgcgamnbbqkbooovb.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtanFnY2dhbW5iYnFrYm9vb3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzQzNjEsImV4cCI6MjA4MzYxMDM2MX0.jqAvXPCbey3E7cqVczpghgdus44WaqBJbJLovtdHpGo
VAPID_PUBLIC_KEY=BG7glQYOmQgTWYNlK5Kxrr40QdVZPMSEJpjuV5PNnRQr7xjWtv2N-h81CxzOKti9yEdKkGFmgaUxnQiyuhgt53c
VAPID_PRIVATE_KEY=ZIGO7NVEWyXc5bUlkiQHUzXcVph1DrH_35PER48XEzE
VAPID_MAILTO=mailto:bingostingo1@gmail.com
```

#### Frontend (.env)
```env
VITE_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
VITE_SUPABASE_URL=https://wmjqgcgamnbbqkbooovb.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtanFnY2dhbW5iYnFrYm9vb3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzQzNjEsImV4cCI6MjA4MzYxMDM2MX0.jqAvXPCbey3E7cqVczpghgdus44WaqBJbJLovtdHpGo
VITE_API_URL=/api
VITE_VAPID_PUBLIC_KEY=BG7glQYOmQgTWYNlK5Kxrr40QdVZPMSEJpjuV5PNnRQr7xjWtv2N-h81CxzOKti9yEdKkGFmgaUxnQiyuhgt53c
```

### Vercel Setup Steps

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel --prod
```

4. **Set Environment Variables in Vercel Dashboard**
   - Go to your project settings
   - Add all environment variables from above
   - Redeploy

---

## ✨ Features

### Feature 1: Crisis Management System
- **Real-time Incident Reporting** with GPS location
- **Live 3D Globe Visualization** showing active crises
- **AI-Powered Severity Analysis** using Google Gemini
- **Push Notifications** to nearby users (5km radius)
- **Live Chat** between reporters and responders
- **Interactive Map** with Leaflet showing incidents, responders, and SOS broadcasts
- **SOS Broadcasting** for users in distress

### Feature 2: Disaster News Aggregation
- **Real-time News Feed** from multiple sources
- **Category Filtering** (Earthquake, Flood, Wildfire, Cyclone, etc.)
- **Location-based News** with distance calculation
- **Geolocation Support** for personalized news
- **SQLite Database** with automatic deduplication

---

## 🔧 API Endpoints

### Crisis Management (`/api/crisis`)
- `POST /api/crisis/alert` - Report new incident
- `GET /api/crisis/active` - Get all active incidents
- `GET /api/crisis/{id}` - Get incident details
- `POST /api/crisis/{id}/accept` - Accept incident as responder
- `POST /api/crisis/subscribe` - Subscribe to push notifications

### News Aggregation (`/api/news`)
- `GET /api/news` - Get disaster news (with filters)
- `GET /api/news/categories` - Get available categories
- `GET /api/news/stats` - Get news statistics

---

## 🗄️ Database Schema (Supabase)

### Tables Required:
1. **profiles** - User profiles with location tracking
2. **incidents** - Crisis incidents
3. **incident_rooms** - Chat rooms for incidents
4. **incident_messages** - Chat messages
5. **push_subscriptions** - Web push subscriptions

### Enable Realtime:
```sql
ALTER PUBLICATION supabase_realtime ADD TABLE incidents;
ALTER PUBLICATION supabase_realtime ADD TABLE incident_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
```

---

## 📱 Progressive Web App (PWA)

The app includes:
- Service Worker for offline support
- Push notification support
- Installable on mobile devices
- Cached assets for faster loading

---

## 🧪 Testing

### Test Backend
```bash
curl http://localhost:8000/api
curl http://localhost:8000/api/crisis/active
curl http://localhost:8000/api/news
```

### Test Frontend
1. Open http://localhost:5173
2. Navigate to `/intelligence` for Crisis Dashboard
3. Navigate to `/news` for News Feed
4. Test incident reporting
5. Test push notifications (requires HTTPS in production)

---

## 🚨 Production Checklist

- [x] Environment variables configured
- [x] Supabase tables created
- [x] Realtime enabled on tables
- [x] VAPID keys generated
- [x] Service worker registered
- [x] CORS configured
- [x] API routes working
- [x] Push notifications tested
- [x] Responsive design verified
- [x] Error handling implemented

---

## 📞 Support

For issues or questions, check the console logs:
- Backend: Check terminal running `python app.py`
- Frontend: Check browser console (F12)
- Supabase: Check Supabase dashboard logs

---

## 🎯 Key URLs

- **Landing Page**: `/landing`
- **Crisis Dashboard**: `/intelligence`
- **Report Incident**: `/report`
- **News Feed**: `/news`
- **Analytics**: `/analytics`
- **Resources**: `/coordination`

---

## 🔐 Security Notes

- All API keys are environment variables
- CORS is configured for production
- Supabase RLS (Row Level Security) should be enabled
- Push notifications require HTTPS
- Service worker only works on HTTPS or localhost

---

## 📊 Performance

- Backend: FastAPI with async support
- Frontend: Vite for fast builds
- 3D Globe: Three.js with optimized rendering
- Maps: Leaflet for lightweight mapping
- Database: Supabase with connection pooling

---

## 🎨 Tech Stack

**Frontend:**
- React 19
- Three.js / React Three Fiber
- Tailwind CSS
- Leaflet Maps
- Supabase Client

**Backend:**
- FastAPI
- Python 3.12
- Google Gemini AI
- Supabase
- PyWebPush

---

## 📝 License

MIT License - Feel free to use for hackathons and educational purposes.
