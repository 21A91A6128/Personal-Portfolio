import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const mailToSelf = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact Form: ${subject}`,
      text: `Message from ${name} <${email}>:\n\n${message}`,
    };

    const mailToSender = {
      from: `"Sri Vardhan" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThank you for contacting me! I’ve received your message:\n\n"${message}"\n\nI’ll get back to you as soon as possible.\n\nBest regards,\nSri Vardhan`,
    };

    try {
      const [info1, info2] = await Promise.all([
        transporter.sendMail(mailToSelf),
        transporter.sendMail(mailToSender),
      ]);

      console.log('Sent to you:', info1);
      console.log('Sent to sender:', info2);
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
