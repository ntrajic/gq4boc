const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const trips = require('./trips');
const REST_PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/trips', async (_, res) => {
  res.status(200).json(trips);
});
app.get('/api/trips/:id', async (req, res) => {
  const id = +req.params.id;
  const trip = trips.filter(trip => trip.id === id);
  return res.status(200).json(trip);
});

app.listen(REST_PORT, () => console.info(`Server is listening on ${REST_PORT} 🎉`));