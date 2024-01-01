const {Schema, model} = require('mongoose')

const Bicycle = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    status: {type: Schema.Types.ObjectId, ref: 'BicycleStatus', required: true},
    color: {type: String, required: true},
    wheelSize: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
})

module.exports = model('Bicycle', Bicycle);
