function propertyValue(array, propertyType){
    var lenArr = array.length;
    
    for(var i = 0; i < lenArr; i++){
        // if(typeof(array[i]) === propertyType){
        //     console.log(array[i]);
        // }
        if(array[i] == 15 || array[i] == -22 || array[i] == 47){
        console.log(array[i]);
        }
    }
}

var array = [NaN, 0, 15, false, -22, '',undefined, 47, null];
var propertyType = "number";
propertyValue(array, propertyType);
