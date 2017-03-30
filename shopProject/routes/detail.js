var router = require('express').Router();
var detailDao = require('../dao/detail.dao');

module.exports = function() {
    router.post('/detail', addDetail);

    function addDetail(req, res) {
        var detail = {
            detail_id: req.body.detail_id,
            idOfOrder: req.body.idOfOrder,
            manufacturer: req.body.manufacturer,
            product_id: req.body.product_id,
            price: req.body.price,
            number: req.body.number
        };

        detailDao.addDetail(detail, function(err, detail) {
            if (err) {
                res.send(err);
            } else {
                res.json(detail).end();
            }
        });
    }

    return router;
}