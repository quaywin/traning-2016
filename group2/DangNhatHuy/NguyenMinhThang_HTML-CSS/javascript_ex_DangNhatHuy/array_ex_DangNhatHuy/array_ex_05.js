function merge_array(array1, array2){
  for(var i = 0; i < array1.length; i++){
    for(var j = 0; j < array2.length; j++){
      if(array1[i] == array2[j]){
        for(var k = i; k < array1.length; k++){
          array1[k] = array1[k + 1];
        }
      array1.length--;
      i--;
      }
    }
  }
  mang_con = array1.concat(array2);
  return mang_con;
}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
