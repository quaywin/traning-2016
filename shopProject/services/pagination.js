var pagination = function(data, count, pageIndex, pageSize){
    var res = {};

    res.currentPage = parseInt(pageIndex);
    res.pageSize = parseInt(pageSize);
    res.totalPage = (count % pageSize == 0)?(count/pageSize):((count - count%pageSize)/pageSize + 1);
    res.totalResult = count;
    res.items = [];

    for (var i in data){
        res.items.push(data[i]);
    }

    return res;
}

module.exports = {
    pagination: pagination
}