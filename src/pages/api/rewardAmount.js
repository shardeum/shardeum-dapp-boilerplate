import fetch from 'node-fetch';

export default async (req, res) => {
  const { address } = req.query;

  try {
    const response = await fetch(`https://api.shardeum.org/api/rewardAmount?address=${address}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
