# CORS Fix - Manual Vercel Dashboard Solution

## Immediate Fix Steps

### Option 1: Create New Vercel Project (Recommended)
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub → Select your repository
4. **Critical Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Output Directory**: (leave empty)

### Option 2: Add Environment Variables in Current Project
1. Go to your current Vercel project dashboard
2. Settings → Environment Variables
3. Add these variables:
   ```
   CORS_ORIGIN=https://service-now-blond.vercel.app
   NODE_ENV=production
   ```

### Option 3: Use Vercel Functions Directory Structure
Create this structure in your backend:
```
backend/
├── api/
│   └── [...slug].js  (catch-all route)
├── package.json
└── vercel.json
```

## Test Endpoints After Fix
- Health: `GET /`
- Login: `POST /auth/login`
- Signup: `POST /auth/signup`

## If Still Not Working
The issue might be that Vercel is not properly routing to your serverless function. Try creating a completely new project with the exact directory structure above.
