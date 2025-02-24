const admin = require("firebase-admin");

const sendNotification = async (userId, message) => {
  try {
    const payload = {
      notification: {
        title: "Food Donation App",
        body: message,
      },
    };
    await admin.messaging().sendToDevice(userId, payload);
    console.log("Notification sent");
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

module.exports = sendNotification;