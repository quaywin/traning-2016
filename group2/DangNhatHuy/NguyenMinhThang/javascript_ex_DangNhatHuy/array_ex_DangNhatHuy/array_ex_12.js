function array_filled(n, val)  
{  
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);  
}  
console.log(array_filled(3, 'default value'));  
console.log(array_filled(4, 'password')); 