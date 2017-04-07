var fs = require('fs');
var path = require('path');

var detail_Order = require('../models/detail_order.model');

module.exports = {
    addDetail_Order: addDetail_Order,
    deleteDetail_Order: deleteDetail_Order,
    updateDetail_Order: updateDetail_Order
}

function addDetail_Order(detail_order, callback) {
    var newdetail_Order = new detail_Order();

    newdetail_Order.detail_id = detail_order.detail_id;
    newdetail_Order.order_id = detail_order.order_id;
    newdetail_Order.manufacturer = detail_order.manufacturer;
    newdetail_Order.product_id = detail_order.product_id;
    newdetail_Order.price = detail_order.price;
    newdetail_Order.number = detail_order.number;


    newdetail_Order.save(function(err, res) {
        if (err)
            callback(err);
        else
            callback(null, {
                detail_order: res
            })
    })
}


function deleteDetail_Order(id, callback) {
    detail_Order.findById({ _id: id }, function(err, detail_order) {
        if (err) {
            callback(err);
        }
        if (!detail_order) {
            callback(null, {
                "mess": "Error"
            });
        } else {
            detail_order.remove(function(err) {
                if (!err) {
                    callback(null, {
                        "order": detail_order
                    })
                }

            })
        }
    })
}

function updateDetail_Order(id, detail_order_n, callback) {
    detail_Order.findById({ _id: id }, function(err, detail_order) {
        if (err) {
            callback(err);
        }
        if (!detail_order) {
            callback(null, {
                "mess": "Not Found"
            })
        }
        detail_order.detail_id = detail_order_n.detail_id || detail_order.detail_id;
        detail_order.order_id = detail_order_n.order_id || detail_order.order_id;
        detail_order.manufacturer = detail_order_n.manufacturer || detail_order.manufacturer;
        detail_order.product_id = detail_order_n.product_id || detail_order.product_id;
        detail_order.price = detail_order_n.price || detail_order.price;
        detail_order.number = detail_order_n.number || detail_order.number;
        detail_order.save(function(err, order) {
            if (!err) {
                console.log("updated");
                callback(null, {
                    "order": order
                })

            } else {
                callback(err);
            }
        });
    })
}