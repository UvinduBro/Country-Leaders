const express = require('express');
const app = express();
const port = 3000; // Change this to the desired port number

app.get('/data', (req, res) => {
    res.sendFile(__dirname + '/data.json');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
