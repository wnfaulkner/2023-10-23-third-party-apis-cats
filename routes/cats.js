var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fact', async function(req, res, next) {
  const catFacts = await fetch('https://catfact.ninja/facts')
  .then(res => res.json())
  console.log(catFacts)
  res.render('cat/fact', {catFacts})
});

module.exports = router;
