var mongoose = require('mongoose');
var schema = mongoose.Schema;

var orderSchema = new schema({
    order_id: String,
    user_id: String
});

var Order = mongoose.model('order', orderSchema);

module.exports = Order;