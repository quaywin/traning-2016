function filter_array_values(array) {  
  array = array.filter(isOK);  
  return array;  
}  
  
function isOK(value) {  
  if(value !== false || value !== null || value !== 0 || value !== "") {  
    return value;  
  }  
}  
  
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));  