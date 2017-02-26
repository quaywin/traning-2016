function isEligible(value) {  
  if(value !== false || value !== null || value !== 0 || value !== "") {  
    return value;  
  }  
}  
function filter_array_values(arr) {  
  arr = arr.filter(isEligible);  
  return arr;  
}  
  
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));  