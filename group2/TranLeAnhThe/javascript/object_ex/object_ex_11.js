
function all_properties(obj)   
{  
 return Object.getOwnPropertyNames(obj);  
}  

console.log(all_properties(Array));
console.log(all_properties(Math));
console.log(all_properties(String));