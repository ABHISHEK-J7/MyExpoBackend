const admin = require("firebase-admin");
const serviceAccount = require("./firebase-service-account.json");

const initializeFirebase = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("✅ Firebase Initialized");
  }
};

module.exports = { initializeFirebase };
