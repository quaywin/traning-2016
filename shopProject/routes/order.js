var router = require('express').Router();
var orderDao = require('../dao/order.dao');

module.exports = function() {
    router.post('/order', addOrder);
    router.post('/orderdetail', findOrder);

    function addOrder(req, res) {
        var order = {
            order_id: req.body.order_id,
            user_id: req.body.user_id
        };

        orderDao.addOrder(order, function(err, order) {
            if (err) {
                res.send(err);
            } else {
                res.json(order).end();
            }
        });
    }

    function findOrder(req, res) {
        var order_id = req.body.order_id;
        orderDao.findOrder(order_id, function(err, rep) {
            if (err) {
                res.send(err);
            } else {
                res.send(rep);
            }
        })
    }
    return router;
}