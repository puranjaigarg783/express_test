// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Demo endpoint that returns a random quote
app.get('/quote', (req, res) => {
  const quotes = [
    { text: "Be the change you wish to see in the world", author: "Mahatma Gandhi" },
    { text: "Stay hungry, stay foolish", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower", author: "Steve Jobs" }
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

// Echo endpoint that returns whatever is sent to it
app.post('/echo', (req, res) => {
  res.json({
    message: "Echo response",
    body: req.body,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

