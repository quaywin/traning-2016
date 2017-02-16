function binarySearch(arr, val) {
   var pos = Math.floor(arr.length / 2);

   if (arr[pos] === val){
      return pos;
   }
   else if (arr.length === 1) 
   {
      return null;
   }
   else if (arr[pos] < val) {
      var arr1 = arr.slice(pos + 1);
      var res = binarySearch(arr1, val);
      if (res === null)
      {
         return null;
      }
      else {
         return pos + 1 + res;
      }
   }
   else {
      var arr2 = arr.slice(0, pos);
      return binarySearch(arr2, val);
   }
}

 var arr = [1, 2, 3, 5, 6, 7];
 console.log(binarySearch(arr, 3));