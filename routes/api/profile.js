const express = require('express')
const router = express.Router()


//@access  public
router.get('/', (req, res) => res.send('Profile router'))



module.exports = router