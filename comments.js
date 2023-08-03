//Create web server
//Import express
const express = require('express');
//Create Router object
const router = express.Router();

//Import database connection
const db = require('../db');
//Import helper functions
const { selectCommentsByPostId } = require('../db/helpers');

//GET /comments/:id
router.get('/:id', (req, res) => {
  const postId = req.params.id;
  db.query(selectCommentsByPostId, [postId])
    .then((response) => {
      res.json(response.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//Export router
module.exports = router;