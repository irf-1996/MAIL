const nodemailer = require('nodemailer');

// Create a transporter with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amaluirfana96@gmail.com',
      pass: 'wplq ldbh crmz oacm'
    }
  });
  

// Email data
const mailOptions = {
  from: 'amaluirfana96@gmail.com',
  to: 'anjanavu2000@gmail.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent from Nodemailer!'
};

// Send the email to the person
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
