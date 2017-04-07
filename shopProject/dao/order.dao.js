var fs = require('fs');
var path = require('path');

var Order = require('../models/order.model');
var Detail = require('../models/detail_order.model');
module.exports = {
    addOrder: addOrder,
    deleteOrder: deleteOrder,
    showOrder: showOrder,
    updateOrder: updateOrder
}

function addOrder(order, callback) {
    var newOrder = new Order();
    newOrder.order_id = order.order_id;
    newOrder.user_id = order.user_id;
    // newOrder.order_detail_id = order.order_detail_id;

    newOrder.save(function(err, res) {
            if (err)
                callback(err);
            else
                callback(null, {
                    order: res
                })
        })
        // Order.find(function (err, order) {
        //     if (err) {
        //         res.send('err');
        //     }
        //     else {
        //         res.status(200).send(order);
        //     }
        // })
}

function deleteOrder(id, callback) {
    Order.findById({ _id: id }, function(err, order) {
        if (err) {
            callback(err);
        }
        if (!order) {
            callback(null, {
                "mess": "Error"
            });
        } else {
            order.remove(function(err) {
                if (!err) {
                    callback(null, {
                        "order": order
                    })
                }

            })
        }
    });
}

function updateOrder(id, order_n, callback) {
    Order.findById({ _id: id }, function(err, order) {
        if (err) {
            callback(err);
        }
        if (!order) {
            callback(null, {
                "mess": "Not Found"
            })
        }
        order.order_id = order_n.order_id;
        order.user_id = order_n.user_id;
        order.save(function(err, order) {
            if (!err) {
                console.log("updated");
                callback(null, {
                    "order": order_n
                })

            } else {
                callback(err);
            }
        });
    })
}

function showOrder(order_id, callback) {
    Order.find({ order_id: order_id }, function(err, order) {
        if (err) {
            callback(err);
        } else {
            if (order) {
                Detail.find({ order_id: order_id }, function(err, list) {
                    if (list) {
                        callback(null, {
                            "order": order,
                            "list": list
                        })
                    } else {
                        callback(
                            null, {
                                "order": order
                            }
                        )
                    }
                });
            }
        }
    })
}