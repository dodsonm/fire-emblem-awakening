// URL PARENT NODE: /api

var express = require('express'),
    router = express.Router();

// Each model has its own module of endpoints. Attach those to the router here.
// The paths and such are still defined in each module.
router.use('/weapon', require('./weapon'));

module.exports = router;
