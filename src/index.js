const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const WEATHERSTACK_API_KEY = "6bedc4c73891f220853bbd2ce4132602";

app.get("/previsao-tempo", async (req, res) => {
  const cidade = req.query.cidade;

  if (!cidade) {
    return res.status(400).json({ mensagem: "Informe uma cidade" });
  }

  try {
    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${cidade}`
    );
    const data = response.data;

    if (data.error) {
      return res.status(404).json({ mensagem: "Cidade não encontrada" });
    }

    const temperatura = data.current.temperature;
    const descricao = data.current.weather_descriptions[0];

    res.json({ cidade, temperatura, descricao });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

app.listen(PORT);
