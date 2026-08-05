const { getGeminiResponse } = require("../services/geminiService");

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    const aiReply = await getGeminiResponse(message);

    res.json({
      success: true,
      reply: aiReply,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  chat,
};
