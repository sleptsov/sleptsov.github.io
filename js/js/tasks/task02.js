function task02() {
    var arr = [];
    var n = +prompt("Enter number of elements in array", "5");
    for (var i = 0; i < n; i++) {
        arr[i] = prompt("Enter " + i + " element of array", "Jack");
    }
    var searchValue = prompt("Type full name to search", "Jack");
    var x = false;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === searchValue) {
            x = true;
        }
    }
    if (x) {
        alert("Welcome, " + searchValue + "!")
    } else {
        alert("There is no " + searchValue + " in array " + "[" + arr + "]");
    }
}