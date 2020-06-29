const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works', (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`)
})

app.listen(PORT, () => console.log(`My first app listening on port ${PORT}!`));
