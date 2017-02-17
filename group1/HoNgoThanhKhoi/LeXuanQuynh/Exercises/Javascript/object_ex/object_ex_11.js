function all_properties(jsObj){
    return Object.getOwnPropertyNames(jsObj).filter(function(property) {
        return typeof jsObj[property] == 'function';
    });
    
}

console.log(all_properties(Array));