function vowel_count(str)  
{  
  var vowelList = 'aeiouAEIOU';  
  var count = 0;  
    
  for(var i = 0; i < str.length ; i++) {     
      for(var j = 0; j < vowelList.length; j++){
          if(str[i] == vowelList[j]){
              count++;
          }
      }
  }  
  return count;  
}  
console.log(vowel_count("The quick brown fox"));  