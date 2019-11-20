const express = require('express')
const router = express.Router()


//@access  public
router.get('/', (req, res) => res.send('Post router'))



module.exports = router