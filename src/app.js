const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/list', async (req, res) => {
  res.sendStatus(204)
});

app.listen(port, () => {
  console.log(`Running on port ${port}!`)
});
