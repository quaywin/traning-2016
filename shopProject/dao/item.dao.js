var Item = require('../models/item.model');

module.exports = {
    createItem: createItem
}

function createItem(itemReq, callback) {
    var newItem = new Item();


    newItem.save()
}