var Item = require('../models/item.model');
var pagination = require('../services/pagination.js')

module.exports = {
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem,
    searchItem: searchItem
}


function createItem(itemReq, callback) {
    var newItem = new Item();
    newItem._id = itemReq._id;
    newItem.name = itemReq.name;
    newItem.price = itemReq.price;
    newItem.image = itemReq.image;
    newItem.provider = itemReq.provider;
    newItem.amount = itemReq.amount;
    newItem.category = itemReq.category;

    newItem.save(function(err) {
        if (err) callback(err);
        else
            callback(null, {
                "mess": "create successfully"
            })
    })
}

function deleteItem(itemID, callback) {
    Item.remove({ _id: itemID }, function(err, reponse) {
        if (err) callback(err);
        else {
            callback(null, {
                "Message": "Deleted"
            });
        }
    });
}

function updateItem(itemReq, callback) {
    Item.findOne({ id: itemReq.id }, function(err, item) {
        if (err) callback(err);
        else {
            item.name = itemReq.name || item.name;
            item.price = itemReq.price || item.price;
            item.image = itemReq.image || item.image;
            item.provider = itemReq.provider || item.provider;
            item.amount = itemReq.amount || item.amount;
            item.category = itemReq.category || item.category;
            item.save(function(err) {
                if (err) callback(err);
                else
                    callback(null, {
                        "mess": "update successfully"
                    });
            })
        }
    })
}

function searchItem(request, callback) {
    var query = {};
    for (var i in request){
        if (i != 'pageIndex' && i != 'pageSize')
            query[i] = request[i];
    }
    Item.count(query, function(err, count){
        if (err) callback(err);
        else 
            Item.find(query)
                .skip( (request.pageIndex > 0) ? (request.pageIndex - 1) * request.pageSize : 0)
                .limit(request.pageSize)
                .exec(function(err, result){
                    if (err) callback(err);
                    else {
                        var res = pagination.pagination(result, count, request.pageIndex, request.pageSize);
                        callback(null,{
                            data: res
                        });
                    }
                });
    });
}