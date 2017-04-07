var mongoose = require('mongoose');
var schema = mongoose.Schema;

var detail_OrderSchema = new schema({
    detail_id: String,
    order_id: String,
    manufacturer: String,
    product_id: String,
    price: Number,
    number: Number
})
var detail_Order = mongoose.model('Order_Detail', detail_OrderSchema);

module.exports = detail_Order;