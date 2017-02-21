function remove_array_element(array, number)
 {
   var x = array.indexOf(number);
   if (x > -1) {
    array.splice(x, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));