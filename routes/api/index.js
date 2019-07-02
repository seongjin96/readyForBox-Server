var express = require('express');
var router = express.Router();

router.use('/mypage', require('./mypage'));
router.use('/auth', require('./auth'));

module.exports = router;
