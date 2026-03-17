const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.get('*', (req, res) => res.sendFile('index.html', { root: './public' }));

app.listen(PORT, '0.0.0.0', () => console.log('Fix-It Assistant running on port ' + PORT));
