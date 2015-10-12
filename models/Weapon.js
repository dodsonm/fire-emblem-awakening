var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Weapons
 *
 */
var WeaponSchema = new Schema({
    name: String,
    type: String,
    rank: String,
    might: Number,
    hit: Number,
    crit: Number,
    range: String,
    uses: Number,
    exp: Number,
    price: Number,
    affects: String,
    notes: String
});
module.exports = mongoose.model('Weapon', WeaponSchema);
