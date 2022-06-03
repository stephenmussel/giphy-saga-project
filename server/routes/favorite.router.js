const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite gifs
router.get('/', (req, res) => {
  const queryText = `SELECT * from favorite ORDER by id DESC;`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows)
    })
    .catch(err => {
      console.log('err in fetching favorites: ', err);
      res.sendStatus(500);
    });
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
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite gif
  const favId = req.params.id;
  console.log('favId: ', favId);
  
  const catId = req.body;
  console.log('catId: ', catId);
  const queryText = `UPDATE favorite SET category_id = $1 WHERE id = $2;`;
  pool.query(queryText, [catId.category_id, favId])
    .then(result => {
      console.log('result: ', result);
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('err in adding category to gif: ', err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const idToRemove = req.params.id;
  console.log('idToRemove:', idToRemove);

  const queryText = `DELETE from favorite WHERE id = $1;`;
  pool.query(queryText, [idToRemove])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(err => {
      console.log('err in removing favorite gif', err);
      res.sendStatus(500);
    });
});

module.exports = router;
