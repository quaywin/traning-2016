var router = require('express').Router();
var orderDao = require('../dao/order.dao');

module.exports = function() {
    router.post('/order', addOrder);
    router.delete('/order/:id', deleteOrder);
    router.get('/order/:id', showOrder);
    router.put('/order/:id', updateOrder);

    function addOrder(req, res) {
        var order = {
            order_id: req.body.order_id,
            user_id: req.body.user_id,
            // order_detail_id: req.body.order_detail_id
        };
        orderDao.addOrder(order, function(err, order) {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(order).end();
        });
    }

    function deleteOrder(req, res) {
        var id = req.params.id;
        orderDao.deleteOrder(id, function(err, mess) {
            if (err)
                res.status(400).send(err);
            else {
                res.status(200).send(mess);
                console.log("Deleted");
            }
        })
    }

    function updateOrder(req, res) {
        var id = req.params.id;
        var order_n = {
            order_id: req.body.order_id,
            user_id: req.body.user_id
        }
        orderDao.updateOrder(id, order_n, function(err, mess) {
            if (err)
                res.status(400).send(err);
            else {
                res.status(200).send(mess);
                console.log("Updated");
            }
        })
    }

    function showOrder(req, res) {
        var order_id = req.params.id;
        orderDao.showOrder(order_id, function(err, mess) {
            if (err) {
                console.log(order_id);
                res.status(400).send(err);
            } else {
                res.status(200).send(mess);
            }
        })
    }
    return router;
}