function task02() {
    var arr = []; // init empty array
    var x = false;
    do {
        var item = prompt("Enter new item in array (or click Close/Cancel button to stop)","");
        arr.push(item);    // fill arr with new items
    } while (item !='' && item != null);
    arr.pop();// cut the last item of arr, which can be '' or null
    console.log(arr);
    var searchValue = prompt("Type value to search", "Jack");
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(searchValue) != -1){
            x = true;// search for input value
        }
    }
    if (x) {
        alert("Welcome, " + searchValue + "!")
    } else {
        alert("There is no " + searchValue + " in array " + "[" + arr + "]");
    }
    console.log(searchValue);
}