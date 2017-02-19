function findSencond(arr){
    var max=0,min=0;
    for(var i=0; i <arr.length;i++) {
        if(arr[max]<arr[i])
            max=i;
        if(arr[min]>arr[i])
            min =i;
    }
    arr.splice(max,1);
    arr.splice(min,1);
    max=0,min=0;
    for(var i=0; i <arr.length;i++) {
        if(arr[max]<arr[i])
            max=i;
        if(arr[min]>arr[i])
            min =i;
    }
    console.log(arr[min]+", " + arr[max]);
}
findSencond([1,2,3,4,5]);
findSencond([1,4,3,6,5]);