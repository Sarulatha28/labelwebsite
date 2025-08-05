const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your email config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your@gmail.com',
    pass: 'yourpassword'
  }
});

app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your@gmail.com', // receiver
    subject: 'New Contact Form Submission',
    text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send('Error sending email');
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
