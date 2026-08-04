const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Santosh! 🚀 AI Voice Chatbot Server is Running.");
});



app.get("/about", (req, res) => {
  res.send("This is an AI Voice Chatbot built using Node.js and Express.");
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
    uptime: process.uptime(),
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
