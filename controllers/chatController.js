const chat = (req, res) => {
  console.log("Request Body:", req.body);

  res.json({
    success: true,
    message: "Message received successfully!",
    data: req.body,
  });
};

module.exports = {
  chat,
};
