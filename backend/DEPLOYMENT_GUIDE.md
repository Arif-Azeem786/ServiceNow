# Backend Deployment Guide

## Manual Deployment to Vercel

### Prerequisites
1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`

### Deployment Steps
1. Navigate to backend directory: `cd backend`
2. Run deployment: `vercel`
3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (for new deployment)
   - Project name: `servicenow-backend`
   - Directory: `./` (current directory)

### Environment Variables Setup
After deployment, add these environment variables in Vercel dashboard:

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
```

### Alternative: Netlify Deployment
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod`

## AI Service Integration Issues

### Current Architecture Problem
- **Backend**: Node.js/Express (Port 8080)
- **AI Service**: Flask/Python (Port 5000)
- **Status**: **NOT INTEGRATED** - Running as separate services

### Integration Options

#### Option 1: Proxy AI Requests through Backend (Recommended)
Add AI proxy routes to your Express backend to forward requests to AI service.

#### Option 2: Deploy AI Service Separately
Deploy Flask AI service to a cloud platform that supports Python (Railway, Render, or Heroku).

#### Option 3: Serverless Functions
Convert AI endpoints to serverless functions on Vercel or Netlify.
