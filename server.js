const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate-pairing-code', (req, res) => {
    const pairingCode = generatePairingCode();
    res.json({ success: true, pairingCode });
});

function generatePairingCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
