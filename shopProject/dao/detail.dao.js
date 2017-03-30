var Detail = require('../model/detail.model');

module.exports = {
    addDetail: addDetail,
}

function addDetail(detail, callback) {
    var newDetail = new Detail();
    newDetail.detail_id = detail.detail_id;
    newDetail.idOfOrder = detail.idOfOrder;
    newDetail.manufacturer = detail.manufacturer;
    newDetail.product_id = detail.product_id;
    newDetail.price = detail.price;
    newDetail.number = detail.numer;

    newDetail.save(function(err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, {
                detail: res
            })
        }
    });
}