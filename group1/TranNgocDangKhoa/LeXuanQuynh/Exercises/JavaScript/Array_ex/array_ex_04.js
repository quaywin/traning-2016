function num_string_range(head, tail, jump){
    var array=[head,tail];
    for(var i=head.charCodeAt()+jump; i<tail.charCodeAt(); i+=jump){
        array.splice(array.length-1,0,String.fromCharCode(i));
    }
    return array;
}
console.log(num_string_range('a', "z", 2));