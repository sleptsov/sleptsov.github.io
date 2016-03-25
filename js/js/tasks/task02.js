function task02() {
    var arr = []; // init empty array
    var x = false;
    var t;
    do {
        var item = prompt("Enter new item in array (or click Close/Cancel button to stop)","");
        arr.push(item);    // fill arr with new items
        t = true;
        if (arr.length == 5) {
             t = confirm("Your rich max length of Array we need in this task. Continue?");
            console.log("Continue status", t);
            if(t == false) {
                break;
            }
        }
    } while (item !='' && item != null);
    if (t == true) {
        arr.pop();// cut the last item of arr, which can be '' or null
    }
    if (arr.length === 0){
        console.log('Array is EMPTY! Please, try once again.');
    } else {
        console.log("Final version of an Array", arr);
        var searchValue = prompt("Type value to search", "Jack");
        if (searchValue == '' || searchValue == null){
            console.log('The value that you are trying to find is NULL or EMPTY! Please, try once again.');
        } else {
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
            console.log("Saerch value", searchValue);
        }
    }
}