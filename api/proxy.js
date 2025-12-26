export default async function handler(req, res) {
  
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const formData = req.body;

    console.log("Enviando para Hubsys...");

    const response = await fetch(process.env.HUBSYS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-USER': process.env.HUBSYS_API_STATIC_USER,
        'X-TOKEN': process.env.HUBSYS_API_STATIC_TOKEN,
        'X-API-KEY': process.env.HUBSYS_API_STATIC_PASSWORD
      },
      body: JSON.stringify(formData)
    });

    const data = await response.text();
    console.log("Resposta Hubsys:", response.status, data);

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json({ success: true, message: data });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}