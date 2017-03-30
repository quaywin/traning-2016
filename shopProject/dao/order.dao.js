var Order = require('../model/order.model');
var Detail = require('../model/detail.model');
module.exports = {
    addOrder: addOrder,
    findOrder: findOrder
}

function addOrder(order, callback) {
    var newOrder = new Order();
    newOrder.order_id = order.order_id;
    newOrder.user_id = order.user_id;
    newOrder.save(function(err, res) {
        if (err) {
            callback(er);
        } else {
            callback(null, {
                order: res
            });
        }
    });
}

function findOrder(orderFind, callback) {
    Order.find({ order_id: orderFind }, function(err, order) {
        if (err) {
            callback(err);
        } else {
            if (order) {
                Detail.find({ idOfOrder: orderFind }, function(err, listDetail) {
                    if (err) {
                        callback(err);
                    } else {
                        if (listDetail) {
                            callback(
                                null, {
                                    "order": order,
                                    "detail": listDetail
                                }
                            )
                        } else {
                            callback(null, {
                                "messde": "no have detail"
                            })
                        }
                    }
                })
            } else {
                callback(null, {
                    "mess": "No order match"
                })
            }
        }
    });
}