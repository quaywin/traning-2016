function contains(array, number){
  for(var i = 0; i < array.length; i++){
      if(array[i] == number){
        return true;
        }
  }
  return false;
}

console.log(contains([2, 5, 9, 6], 5));