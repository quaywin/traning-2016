function fil(arr) {  
  arr = arr.filter(what);  
  return arr;  
}  
  
function what(value) {  
  if(value !== false || value !== null || value !== 0 || value !== "") {  
    return value;  
  }  
}  
  
console.log(fil([58, '', 'abcd', true, null, false, 0]));