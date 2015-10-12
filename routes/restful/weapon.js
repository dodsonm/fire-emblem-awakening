// child of ./main

var express = require('express'),
    mongoose = require('mongoose'),
    Weapon = require('../../models/Weapon'),
    router = express.Router();

router.route('/')
    // create
    .post(function (req, res) {
        var weapon = new Weapon();

        for (var p in req.body) {
            weapon[p] = req.body[p];
        }

        weapon.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    msg: 'Weapon created!',
                    data: weapon
                });
            }

        });
    })
    // find all
    .get(function(req, res) {
        Weapon.find(function(err, weapons) {
            if (err) {
                res.send(err);
            }
            res.json(weapons);
        });
    });

router.route('/:weapon_id')
    .get(function (req, res) {
        Weapon.findById(req.params.weapon_id, function (err, weapon) {
            if (err) {
                res.send(err);
            }
            res.json(weapon);
        });
    })
    .put(function (req, res) {
        Weapon.findById(req.params.weapon_id, function (err, weapon) {
            if (err) {
                res.send(err);
            }
            // redefine props here
            weapon.org = req.body.org;

            // save those changes
            weapon.save(function (err) {
                if (err) res.send(err);

                res.json({
                    msg: 'Weapon updated!',
                    _id: weapon._id
                });
            });
        });
    })
    .delete(function (req, res) {
        Weapon.remove({
            _id: req.params.weapon_id
        }, function (err, weapon) {
            if (err) {
                res.send(err);
            }

            res.json({
                msg: 'Weapon deleted!',
                _id: req.params.weapon_id
            });
        });
    });

module.exports = router;
