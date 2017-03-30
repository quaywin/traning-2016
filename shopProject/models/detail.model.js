var mongoose = require('mongoose');
var schema = mongoose.Schema;

var detailSchema = new schema({
    detail_id: String,
    idOfOrder: String,
    manufacturer: String,
    product_id: String,
    price: Number,
    number: Number
});

var Detail = mongoose.model('detail', detailSchema);

module.exports = Detail