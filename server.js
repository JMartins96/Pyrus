// server.js (API Pyrus em 8081 com /api/*)
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8082;

// Segurança & rede atrás de proxy (Nginx)
app.set("trust proxy", 1);

// CORS (ajusta se precisares)
app.use(cors({
  origin: ["https://pyrus.pt", "https://www.pyrus.pt"],
  credentials: true
}));

// Body parsers nativos do Express
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// Healthcheck
app.get("/api/health", (req, res) => res.status(200).send("OK"));

// POST /api/send-email
app.post("/api/send-email", async (req, res) => {
  try {
    const formData = req.body;
    // Usa variáveis de ambiente (NÃO hard-code!)
    const user = "noreply.advir@gmail.com"; // Teu email
    const pass = "ihpgedswadmqtceh"; // Palavra-passe ou App Password

    if (!user || !pass) {
       return res.status(500).send("Configuração de email em falta.");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
      user: "noreply.advir@gmail.com", // Teu email
      pass: "ihpgedswadmqtceh" // Palavra-passe ou App Password
      }
    });

    const tipos = Object.keys(formData)
      .filter(k => ['vender-imóvel', 'parceiro-projeto', 'comprar-imóvel', 'outro'].includes(k))
      .map(k => k === 'outro' ? `Outro (${formData['outro-texto'] || ''})` : k)
      .join(', ');


  const mailOptions = {
    from: user,
    to: "jlmartins@pyrus.pt",
    subject: `Nova Solicitação: ${formData.assunto||"(sem assunto)"}`,
    text:
    `Nome: ${formData.nome || ""}
    Telemóvel: ${formData.telemovel || ""}
    Email: ${formData.email || ""}
    Tipo de Solicitação: ${tipos}
    Assunto: ${formData.assunto || ""}
    Descrição: ${formData.descricao || ""}
    Desejo de Contacto: ${formData.contacto || ""}
    Data de Contacto: ${formData["reuniao-data"] || ""}
    Hora de Contacto: ${formData["reuniao-hora"] || ""}
    Contacto Preferido: ${formData["contacto-preferencia"] || ""}`
    };
  await transporter.sendMail(mailOptions);
    res.send("Solicitação enviada com sucesso!");
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    res.status(500).send("Erro ao enviar email.");
  }
  });

// Não servir frontend aqui (Nginx já trata disso em 4100)
// Se precisares para testes locais, descomenta:
// const path = require("path");
// app.use(express.static(path.join(__dirname, "pyrus_html")));
// app.get("/", (_, res) => res.sendFile(path.join(__dirname, "pyrus_html", "index.html")));

  app.listen(PORT, "127.0.0.1", () => {
    console.log(`API Pyrus a ouvir em https://pyrus.pt/api/* (upstream 127.0.0.1:${PORT})`);
  });
