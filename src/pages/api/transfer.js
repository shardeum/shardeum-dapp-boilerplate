import fetch from 'node-fetch';

export default async (req, res) => {
  const { address } = req.body;

  try {
    const response = await fetch(`https://api.shardeum.org/api/transfer?address=${address}`, {
      method: 'POST'
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Transfer failed.' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Transfer failed.' });
  }
};
