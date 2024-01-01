const {Schema, model} = require('mongoose')

const BicycleStatus = new Schema({
    name: {type: String, required: true},
})

module.exports = model('BicycleStatus', BicycleStatus);
