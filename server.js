const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    res.send('Message received. Thank you!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
