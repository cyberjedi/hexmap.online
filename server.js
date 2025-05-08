const express = require('express');
const setCustomHeaders = require('./middleware/headers');

const app = express();
const PORT = process.env.PORT || 8080;

// Apply custom headers to all responses
app.use(setCustomHeaders);

app.get('/', (req, res) => {
  res.send('Basic Express server for HexMap.Online is running. Headers are set.');
});

app.listen(PORT, () => {
  console.log(`Minimal server listening on port ${PORT}`);
  console.log(`Custom headers are being applied by this server.`);
}); 