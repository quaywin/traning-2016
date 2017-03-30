var router = require('express').Router();
var itemDao = require('../dao/item.dao');

module.exports = function() {
    router.post('/item', createItem);
    router.put('/item/:id', updateItem);
    router.delete('/item/:id', deleteItem);

    function createItem(req, res) {
        var item = {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            provider: req.body.provider,
            amount: req.body.amount,
            category: req.body.category
        }
        itemDao.createItem(item, function(err, mess) {
            if (err) res.send(err);
            else
                res.send(mess);
        })
    }

    function updateItem(req, res) {
        var item = {
            name: req.params.name,
            price: req.body.price,
            image: req.body.image,
            provider: req.body.provider,
            amount: req.body.amount,
            category: req.body.category
        }
        itemDao.updateItem(item, function(err, mess) {
            if (err) res.send(err);
            else
                res.send(mess);
        })
    }


    return router;
}