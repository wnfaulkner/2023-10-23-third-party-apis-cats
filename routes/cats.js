var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fact', async function(req, res, next) {
  const catFact = await fetch('https://catfact.ninja/fact')
  .then(res => res.json())
  // console.log(catFact)
  res.render('cat/fact', {catFact})
});

module.exports = router;
