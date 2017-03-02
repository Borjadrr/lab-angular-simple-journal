const express       = require('express');
const router        = express.Router();
const journalEntry = require('../../models/journal-entry');

module.exports = router;


router.get('/', (req, res, next) => {
  journalEntry.find({},function (err,journalEntry){
    if (err) return next(err);
    res.json( journalEntry );
  });
});
