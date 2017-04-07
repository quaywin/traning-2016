var router = require('express').Router();
var itemDao = require('../dao/item.dao');

module.exports = function() {
    router.post('/', createItem);
    router.put('/:id', updateItem);
    router.delete('/:id', deleteItem);
    router.post('/search', searchItem);

    function createItem(req, res, next) {
        var item = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            provider: req.body.provider,
            amount: req.body.amount,
            category: req.body.category
        }
        itemDao.createItem(item, function(err, mess) {
            if (err) next(err);
            else
                res.send(mess);
        })
    }

    function updateItem(req, res, next) {
        var item = {
            _id: req.params.id,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            provider: req.body.provider,
            amount: req.body.amount,
            category: req.body.category
        }
        itemDao.updateItem(item, function(err, mess) {
            if (err) next(err);
            else
                res.send(mess);
        })
    }

    function deleteItem(req, res, next) {
        itemDao.deleteItem(req.params.id, function(err, mess) {
            if (err) next(err);
            else
                res.send(mess);
        })
    }

    function searchItem(req, res, next) {
        req.body["pageSize"] = 10;
        itemDao.searchItem(req.body, function(err, mess){
            if (err){
                console.log(err);
                next(err);
            }
            else res.send(mess);
        });
    }

    return router;
}