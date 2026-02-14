const express = require('express');
const app = express();
app.use(express.json());

const fleet = [];

app.get('/', (req, res) => {
  res.json({ 
    status: 'running', 
    service: 'openclaw-controller',
    fleet_size: fleet.length,
    uptime: process.uptime()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/fleet', (req, res) => {
  res.json({ agents: fleet });
});

app.post('/fleet/register', (req, res) => {
  const { name, url, member_name } = req.body;
  fleet.push({ name, url, member_name, status: 'online', created_at: new Date() });
  console.log(`Registered: ${name} at ${url}`);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Controller listening on port ${PORT}`);
});
