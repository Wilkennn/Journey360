// server.js (ou api.js, se preferir)
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/proxy', async (req, res) => {
  try {
        
    console.log(`[SERVER] Enviando lead para Hubsys...`);

    const response = await fetch(process.env.HUBSYS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-USER': process.env.HUBSYS_API_STATIC_USER,
        'X-TOKEN': process.env.HUBSYS_API_STATIC_TOKEN,
        'X-API-PASSWORD': process.env.HUBSYS_API_STATIC_PASSWORD
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();
    
    if (!response.ok) {
      console.error('[SERVER] Erro Hubsys:', data);
      return res.status(response.status).send(data);
    }

    console.log('[SERVER] Sucesso!');
    return res.status(200).send(data);

  } catch (error) {
    console.error('[SERVER] Erro Interno:', error);
    return res.status(500).json({ error: error.message });
  }
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); 
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});