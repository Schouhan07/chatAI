const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const chatbotRoutes = require('./routes/chatbot');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
