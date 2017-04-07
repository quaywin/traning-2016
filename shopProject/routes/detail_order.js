var router = require('express').Router();
var detail_OrderDao = require('../dao/detail_order.dao');

module.exports = function() {
    router.post('/order/detail', addDetail_Order);
    router.delete('/order/detail/:id', deleteDetail_Order);
    router.put('/order/detail/:id', updateDetail_Order);

    function addDetail_Order(req, res) {
        var detail_order = {
            detail_id: req.body.detail_id,
            order_id: req.body.order_id,
            manufacturer: req.body.manufacturer,
            product_id: req.body.product_id,
            price: req.body.price,
            number: req.body.number
        };
        detail_OrderDao.addDetail_Order(detail_order, function(err, order) {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(detail_order).end();
        });
    }

    function deleteDetail_Order(req, res) {
        var id = req.params.id;
        detail_OrderDao.deleteDetail_Order(id, function(err, mess) {
            if (err)
                res.status(400).send(err);
            else {
                res.status(200).send(mess);
            }
        })
    }

    function updateDetail_Order(req, res) {
        var id = req.params.id;
        var detail_order_n = {
            detail_id: req.body.detail_id,
            order_id: req.body.order_id,
            manufacturer: req.body.manufacturer,
            product_id: req.body.product_id,
            price: req.body.price,
            number: req.body.number
        }
        detail_OrderDao.updateDetail_Order(id, detail_order_n, function(err, mess) {
            if (err)
                res.status(400).send(err);
            else {
                res.status(200).send(mess);
                console.log("Updated");
            }
        })
    }

    return router;
}