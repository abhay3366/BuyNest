// config/email.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ Mail connection error:', error);
  } else {
    console.log('✅ Mail server is ready to send messages');
  }
});

module.exports = transporter;
