import express from 'express';
import { name } from '../package.json' with { type: 'json' };

const app = express();

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    service: name,
    timestamp: new Date().toISOString()
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
