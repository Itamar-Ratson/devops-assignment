const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    service: 'devops-assignment',
    timestamp: new Date().toISOString()
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
