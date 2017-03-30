var Item = require('../models/item.model');

module.exports = {
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem
}

function createItem(itemReq, callback) {
    var newItem = new Item();
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
                mess: "create successfully"
            })
    })
}

function deleteItem(itemID, callback) {
    Item.remove( {_id: itemID}, function(err, reponse){
        if (err) callback(err);
        else {
            callback(null,{
                "Message": "Deleted"
            });
        }
    });
}