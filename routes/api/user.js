var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/api/user');

router.get('/', userCtrl.index);

module.exports = router;