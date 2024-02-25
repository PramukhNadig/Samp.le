const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/daily', (req, res) => {
  res.send('Daily');
});

router.get('/sampled', (req, res) => {
  res.send('Sampled');
});

router.get('/example', (req, res) => {
  const jsonToSend = {
    'song': 'Song Title',
    'artist': 'Artist Name',
    'album': 'Album Name',
    'year': 2020,
    'genre': 'Genre',
    'artwork': 'Artwork URL',
    'ytlink': 'YouTube Link',
  };
  res.json(jsonToSend);
});

// temp route eventuall will be usable
router.get('/example/:id', (req, res) => {
  const jsonToSend = {
    'song': 'Song Title',
    'artist': 'Artist Name',
    'album': 'Album Name',
    'year': 2020,
    'genre': 'Genre',
    'artwork': 'Artwork URL',
    'ytlink': 'YouTube Link',
  };
  res.json(jsonToSend);
});

router.get('/example/:id/samples', (req, res) => {
  const jsonToSend = {
    'samples': [
      {
        'songId': 'Song ID',
        'samples': ['Sample ID 1', 'Sample ID 2'],
        'sampledBy': ['Sampled ID 1', 'Sampled ID 2'],
      },
    ],
  };
  res.json(jsonToSend);
});

app.use('/', router);

module.exports = app;
