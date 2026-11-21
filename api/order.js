module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, address } = req.body || {};
    if (!name || !email || !address) {
      res.status(400).json({ error: 'Name, email and address are required' });
      return;
    }
    console.log('Order received:', { name, email, address });
    res.status(200).json({ message: 'Order placed successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
