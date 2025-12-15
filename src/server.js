import express from 'express';
import pkg from '../package.json' with { type: 'json' };

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    service: pkg.name,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));