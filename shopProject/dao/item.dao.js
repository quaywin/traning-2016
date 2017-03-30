var Item = require('../models/item.model');

module.exports = {
    createItem: createItem,
    updateItem: updateItem,
    deleteItem: deleteItem

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
    Item.remove( {_id: itemID}, function(err, reponse){
        if (err) callback(err);
        else {
            callback(null,{
                "Message": "Deleted"
            });
        }
    });

function updateItem(itemReq, callback) {
    Item.findOne({ _id: itemReq._id }, function(err, item) {
        if (err) callback(err);
        else {
            item.name = itemReq.name;
            item.price = itemReq.price;
            item.image = itemReq.image;
            item.provider = itemReq.provider;
            item.amount = itemReq.amount;
            item.category = itemReq.category;
            item.save(function(err) {
                if (err) callback(err);
                else
                    callback(null, {
                        "mess": "update successfully"
                    })
            })
        }
    })

}