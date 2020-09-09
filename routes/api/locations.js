const router = require('express').Router();
const locationsCtrl = require('../../controllers/api/locations');

// routes

router.get('/:id', locationsCtrl.show)

// exports
module.exports = router;