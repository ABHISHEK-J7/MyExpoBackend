# 🔧 Environment Variables Setup Guide

## ✅ What's Already Configured
Your Firebase configuration is already set up with the values from your `firebase-service-account.json` file.

## 🔄 What You Need to Configure

### 1. MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier)
4. Create a database user:
   - Go to "Database Access" → "Add New Database User"
   - Username: `foodwaste_user` (or your choice)
   - Password: Generate a strong password
   - Role: "Read and write to any database"
5. Get your connection string:
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
6. Replace in `.env`:
   ```
   MONGO_URI=mongodb+srv://foodwaste_user:your_password@your_cluster.mongodb.net/foodwasteapp?retryWrites=true&w=majority
   ```

### 2. JWT Secret Generation
Generate a strong random string for JWT_SECRET:
```bash
# Option 1: Use openssl
openssl rand -base64 64

# Option 2: Use node
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"

# Option 3: Use online generator
# Go to https://generate-secret.vercel.app/64
```

Replace in `.env`:
```
JWT_SECRET=your_generated_secret_here
```

### 3. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to "Security" → "App passwords"
4. Generate a new app password for "Mail"
5. Replace in `.env`:
   ```
   EMAIL_USERNAME=your_gmail@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password
   ```

## 🚀 For Render Deployment

When deploying to Render, set these environment variables in the Render dashboard:

### Required Variables:
```
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/foodwasteapp?retryWrites=true&w=majority
JWT_SECRET=your_generated_secret_here
EMAIL_USERNAME=your_gmail@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
FIREBASE_PROJECT_ID=food-donation-management-52d84
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDSHQ6TyG7Nv7ru\n0VCQQTD47BDBVQxmSUPCzD12EPXXWILxmItQb/kFwnFFGP02v7mtLL6LW2CwHhed\n6nB0BP8QZT9CvswT2vNT614FTGsetdsyymmCto5vpxCLUy/A2QvHXENshrGu7itP\nQqKlNKByXJ6myA7zXlzpvN4H1Vm6AvQO5yIHHocPK+i8bpxWgA0q7gvIQA+eUqMX\nSZPn7MFOP7QhO1PEBi2LcvTIVkWSG/RKwA/OB09fN2wZNlqFtlCsxwpYclUnMvm9\njH2nmAjbXmbAU5Y/iXJGmNw5keRwB+ZhKLoQle5pb/D8XQcNsuZLSA3JbYTYQwx0\nLbeWoPD/AgMBAAECggEAAbKVZxFD/+qQJpTPW1MDg8dYfU9kGcF2yDChQH5zlglT\niYMrgPtenjLLenzwsswKwoDtiy+yUMn1c+Osg+t0ahv/Tlk/SdvHgoKQ0GclKGrc\nugTTpGg4L2PAqPeDl8HJLBOtQce20MyA0hOeP8p0j2f7KirMoB+/jW3mt1Z8cpnG\nwan2IN8UlvO2FjZBBySCGWjnwMBjXiH9Z2iNcEzFWcCi/iP1vNpEwdTYnfkQt6c4\nZcGXc8vCNQxOeO1P6WutP8yIEhyMbIH1+zB51gg74j8qLh1R9X3YnpC+4yq22ZX/\nfr9P+CA/poFxxyAPZUTN55jpT5PZkslwps+6mYagKQKBgQDyfiYcFZWNZVHHpgOY\nu5upHQByksrYnIF7xoS+QfoHc9a/5o9bl8jegK2P1iG6y9h/B9/nm3CBz/C6DNKv\nofQf5+tqiZ8tSL5Km+vp9TFO20+vZtrj8/+np5dHaTOpkSE+5tYUHKRJSKYSRWD+\nRsVEklY3wBp3S+q5uaGXUCPeaQKBgQDd0TFKMbx78b6NbE/S0vUyDe0JTJixUO8c\nfItf/lKffhKJAWciFYNcDCvqeQGvabVKug62JuI5Oe+o/b9dLe3c5dcYH7/MtO7E\nVOV1t6+Humni+A0WdyUszy1bzmKSt9AiKW8Rjk8QViqrbsiIvSl/r102QNipKTnk\n27kh2CW3JwKBgCEiYZy2yk+ex5TrN1SYVgW+o8AEFNmSURMTpjHFHCAGkRJ5s58F\nV3onxQ+BZ+x5TCTXc53XHIFwY2lYtTUwgQYXD5DoKyrp5K6XLZ4zVcB7sSC7gi9h\nuM401TP5yQhjf1J0Ak6PN1eYKLEYb89u5iefg05s3nDsm68zEUR2u9/5AoGAe1F4\n2KnMAxBEAvXrbubvgFNzq47U+Qdo1+p5xfVrU9ZQUbDg+HcDX6I4rBN4F2BqdM/5\nq9T0QiJulgH0aMZHDl8NdRD5ncIdWDNmmkpzoL7HbXLAO/QjS8Umj3qvHKhqYwOs\nBxOZ6xgsgsCFZlfcAWuqI6Zrjago0o5BX4p+dVMCgYAZiHD6rocQGrL6+XgUkPrW\n3AoHDcQblNR0U3gXbiNekLAEuW9KO3LmWiHIUHluuC9yek3c3S3r/bFUKDPNKlkj\nUbySO2EB3RlJaZfVOmefOsFs+O0Ob0Ypz6kVggP74jPP86Mf0ECqfUVfMx/S/9Rt\n57bM0Ja33/OjxPsGMd5Tkg==\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@food-donation-management-52d84.iam.gserviceaccount.com
```

### Optional Variables:
```
PORT=10000
NODE_ENV=production
```

## 🔒 Security Notes
- Never commit `.env` file to Git
- Keep your secrets secure
- Use different secrets for development and production
- Regularly rotate your JWT_SECRET in production 