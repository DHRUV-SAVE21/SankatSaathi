# 🚀 SankatSaathi - Quick Start Guide

## ⚡ Currently Running

```
✅ Frontend: http://localhost:5173
✅ Backend:  http://localhost:8000
✅ Status:   FULLY OPERATIONAL
```

---

## 🎯 Quick Access

### Main Features
- **Crisis Dashboard:** http://localhost:5173/intelligence
- **Report Incident:** http://localhost:5173/report
- **News Feed:** http://localhost:5173/news
- **Landing Page:** http://localhost:5173/landing

### API Endpoints
- **Active Crises:** http://localhost:8000/api/crisis/active
- **News Feed:** http://localhost:8000/api/news
- **API Docs:** http://localhost:8000/docs

---

## 🔧 Quick Commands

### Start Servers (if not running)
```bash
# Terminal 1 - Backend
cd backend
python app.py

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Test System
```bash
python test_system.py
```

### Deploy to Production
```bash
vercel --prod
```

---

## 📊 Current Data

- **Active Incidents:** 3
- **News Articles:** 41
- **Categories:** Wildfire, Cyclone, Flood
- **Push Notifications:** Configured ✅
- **Realtime Updates:** Active ✅

---

## 🎨 Key Features

### Feature 1: Crisis Management
- 3D Globe with incident markers
- GPS-based reporting
- AI severity analysis
- Push notifications (5km radius)
- Live chat
- SOS broadcasting

### Feature 2: News Aggregation
- Real-time disaster news
- Category filtering
- Location-based sorting
- Distance calculation
- Auto-refresh

---

## 🔐 Environment Variables

All configured in:
- `backend/.env` ✅
- `frontend/.env` ✅

VAPID keys set for push notifications ✅

---

## 📱 Test Workflow

1. Open http://localhost:5173/landing
2. Click "Initialize System"
3. Navigate to "Intelligence" (Crisis Dashboard)
4. Try reporting an incident
5. Check the map for markers
6. View News Feed
7. Test SOS broadcasting

---

## 🚀 Deploy Checklist

- [x] Environment variables configured
- [x] Backend running and tested
- [x] Frontend running and tested
- [x] Database connected (Supabase)
- [x] News database populated (SQLite)
- [x] Push notifications configured
- [x] Realtime features working
- [x] All API endpoints tested
- [x] Responsive design verified

**Ready for Vercel deployment!**

---

## 📞 Quick Troubleshooting

**Frontend not loading?**
```bash
cd frontend
npm install
npm run dev
```

**Backend errors?**
```bash
cd backend
pip install -r requirements.txt
python app.py
```

**Database issues?**
- Check Supabase credentials in `.env`
- Verify internet connection
- Check Supabase dashboard

**Push notifications not working?**
- Requires HTTPS in production
- Check VAPID keys in both `.env` files
- Verify service worker is registered

---

## 🎉 You're All Set!

Your SankatSaathi system is **fully operational** and ready for production!

**Next:** Deploy to Vercel with `vercel --prod`

---

*Last Updated: January 15, 2026*
