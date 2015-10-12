var express = require('express'),
    Weapon = require('../models/Weapon'),
    router = express.Router();

// HOMEPAGE
router.get('/', function(req, res) {
    res.render('index', {
        title:'Weapons Guide | Fire Emblem | Awakening',
        credit: 'Matt.Dodson.Digital',
        msg: 'Hello Word!'
    });
});

// WEAPON
router.get('/weapon', function(req, res) {
  var schema = {};
  Weapon.schema.eachPath(function (pathname, schemaType) {
    schema[pathname] = schemaType.instance;
  });

    res.render('weapon', {
        title:'Weapons Guide | Fire Emblem | Awakening',
        credit: 'Matt.Dodson.Digital',
        msg: 'This is a form.',
        schema: schema
    });
});

module.exports = router;
