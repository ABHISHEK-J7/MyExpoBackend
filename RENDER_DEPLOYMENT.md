# Render Deployment Guide for MyExpoBackend

## Prerequisites
- ✅ GitHub repository pushed (MyExpoBackend)
- ✅ MongoDB Atlas database set up
- ✅ Firebase project configured
- ✅ Environment variables ready

## Step 1: Set Up MongoDB Atlas (if not already done)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string
5. Add your IP to whitelist (or use 0.0.0.0/0 for all IPs)

## Step 2: Deploy to Render

### 2.1 Create a New Web Service
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub account if not already connected
4. Select your `MyExpoBackend` repository

### 2.2 Configure the Service
- **Name**: `myexpo-backend` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free (or paid if needed)

### 2.3 Environment Variables
Add these environment variables in Render dashboard:

```env
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/foodwasteapp?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random_please_change_in_production
PORT=10000
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_email_app_password
```

### 2.4 Advanced Settings
- **Auto-Deploy**: Enabled (recommended)
- **Health Check Path**: `/` (optional)

## Step 3: Deploy and Test

1. Click "Create Web Service"
2. Wait for build to complete (usually 2-5 minutes)
3. Your service will be available at: `https://your-service-name.onrender.com`

## Step 4: Update Frontend Configuration

Once deployed, update your frontend API configuration:

```javascript
// In MyExpoApp/config/apiConfig.js
const API_BASE_URL = 'https://your-service-name.onrender.com/api';
```

## Step 5: Test Your API

Test your endpoints:
- `GET https://your-service-name.onrender.com/` (should return "Server is running...")
- `POST https://your-service-name.onrender.com/api/auth/register`
- `POST https://your-service-name.onrender.com/api/auth/login`

## Troubleshooting

### Common Issues:
1. **Build fails**: Check if all dependencies are in package.json
2. **Environment variables**: Ensure all required env vars are set
3. **MongoDB connection**: Verify MONGO_URI is correct and IP is whitelisted
4. **Port issues**: Render uses PORT env var automatically

### Logs:
- Check Render dashboard → Your service → Logs
- Monitor for any errors during build or runtime

## Security Notes

1. **JWT_SECRET**: Use a strong, random string
2. **MongoDB**: Use strong password and limit IP access
3. **Firebase**: Keep service account keys secure
4. **CORS**: Configure properly for your frontend domain

## Performance Tips

1. **Free tier limitations**: 
   - 750 hours/month
   - Sleeps after 15 minutes of inactivity
   - First request after sleep takes 30-60 seconds

2. **Upgrade considerations**:
   - Paid plans for better performance
   - Custom domains
   - SSL certificates (included)

## Monitoring

- Use Render's built-in monitoring
- Set up health checks
- Monitor response times
- Check error rates

## Next Steps

1. ✅ Deploy backend to Render
2. 📱 Update frontend API config
3. 🧪 Test complete application
4. 🚀 Deploy frontend (Expo/EAS Build)
5. 📊 Set up monitoring and analytics 