
function between(start, end)   
{  
    
        if (start > end) {  
            var arr = new Array(start - end + 1);  
            for (var i = 0; i < arr.length; i++, start--) {  
                arr[i] = start; 
              
            }  
            return arr;  
        }   
       else   
       {  
            var ar = new Array(end-start+1);  
           
        for (var j = 0; j < ar.length; j++, start++)   
        {  
            ar[j] = start;  
      
        }  
            return ar;  
        }  
    }  
console.log(between(4, 7));  
console.log(between(-4, 7));