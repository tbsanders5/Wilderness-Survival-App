const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MapSchema = new Schema({
    // Schema for the maps collections of the db
});

const Maps = mongoose.model("maps", MapSchema);

module.exports = Maps;