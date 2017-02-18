
function array(start, length)   
     {  
        var array = new Array(length);  
        for (var i = 0; i < length; i++, start++)   
        {  
            array[i] = start;  
        }  
            return array;  
}  
  
  
console.log(array(1, 4));  
  
console.log(array(-6, 4));