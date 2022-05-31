const axios = require('axios');
const express = require('express');
const router = express.Router();

// POST route for search string to be received...
router.post('/', (req, res) => {
    searchQuery = req.body.search;
    console.log('searchQuery: ', searchQuery);

    // then that data can be used in the GET request
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchQuery}&limit=5&offset=0&rating=g&lang=en`)
        .then(response => {
            console.log(response.data.data);
            res.send(response.data.data); 
        })
        .catch(err => { 
            console.log('err in search query: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;