
// script.js
document.getElementById('pairingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pairingCode = generatePairingCode();
    document.getElementById('result').innerText = `Your pairing code for ${phoneNumber} is: ${pairingCode}`;
});

function generatePairingCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
