const express = require('express');
const cors = require('cors');
const emailjs = require('@emailjs/nodejs');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  };

  try {
    await emailjs.send(
      'YOUR_EMAILJS_SERVICE_ID',
      'YOUR_EMAILJS_TEMPLATE_ID',
      templateParams,
      {
        publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
        privateKey: 'YOUR_EMAILJS_PRIVATE_KEY',
      }
    );
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
