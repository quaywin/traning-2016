var mongoose = require('mongoose');
var schema = mongoose.Schema;

var itemSchema = schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    image: [String],
    provider: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: String
    }
});

var item = new mongoose.model('item', itemSchema);

module.exports = item;