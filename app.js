const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello irianto");
});

app.listen(3000);
