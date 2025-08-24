# Vercel Deployment Troubleshooting

## Current Issue: "Cannot GET /"

The deployment hasn't updated to use the new serverless structure. Here's how to fix it:

## 🔧 Immediate Fix Steps

### Option 1: Force Redeploy in Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your backend project
3. Go to "Deployments" tab
4. Click "..." on latest deployment → "Redeploy"
5. Wait for completion

### Option 2: Create New Vercel Project
1. In Vercel dashboard → "New Project"
2. Import from GitHub → Select your repository
3. **Important Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Output Directory**: (leave empty)

### Option 3: Manual CLI Deployment
```bash
cd backend
npx vercel --prod
```

## 🔍 Check These Settings

### Vercel Project Settings
- **Root Directory**: Must be `backend`
- **Build Command**: `npm install`
- **Output Directory**: (empty)
- **Install Command**: `npm install`

### Environment Variables Required
```
MONGO_CONN=mongodb+srv://SETV_Disease_Detection_Pregnancy_Tracker:xPaFYn2Yowyuc0gk@setvdiseasedetectionpre.nktug.mongodb.net/?retryWrites=true&w=majority&appName=SETVDiseaseDetectionPregnancyTracker
JWT_SECRET=dJ$1F&7k@z!P3w#q^r9XmL8Y~VdGZ%T6JpBx*1C2E&hK@N
CLIENT_URL=https://service-now-blond.vercel.app
AZURE_STORAGE_SAS_TOKEN=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2025-10-31T23:16:28Z&st=2025-02-28T15:16:28Z&spr=https,http&sig=bV0uMHdfFDu2wkKTKkJtRIh4mrbSnSTHOWcllS20oSw%3D
AZURE_STORAGE_ACCOUNT_NAME=setvwaitest
AZURE_STORAGE_CONTAINER_DOCUMENTS=documents
AZURE_STORAGE_CONTAINER_VIDEOS=videos
AZURE_STORAGE_CONTAINER_IMAGES=images
AZURE_STORAGE_CONTAINER_REPORTS=reports
SITE_KEY=6LcYbOMqAAAAABnhImukf_SpFrE6w7e_y2vdACr3
SECRET_KEY=6LcYbOMqAAAAAFI5cSNAcOJEUTecflsROU06ngL9
AI_SERVICE_URL=http://localhost:5000
```

## ✅ Expected Result
After successful deployment, visiting your URL should show:
```json
{
  "message": "ServiceNow Backend API is running",
  "status": "healthy"
}
```

## 🚨 If Still Not Working
The issue might be that Vercel is still using the old `index.js` instead of `api/index.js`. Try creating a completely new Vercel project with the correct settings.
