const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  const newFav = req.body;
  console.log('newFav: ', newFav);

  const queryText = `INSERT INTO favorite ("url") VALUES ($1);`;
  pool.query(queryText, [newFav.url])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('err in adding newFav: ', err);
      res.sendStatus(500);
    });
  });

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
