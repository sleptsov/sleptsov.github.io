function task01(){
    var x = +prompt("Enter number: ", "2");
    var degree = +prompt("Enter degree: ", "3");
    var result;
    pow(x, degree);

    function pow(x, degree) {
        if (isNaN(x) || isNaN(degree)){
            console.log("Use ONLY numbers!");
            return;
        } else {
            switch (true){
                case (degree == 0):
                    result = 1;
                    break;
                case (degree == 1):
                    result = x;
                    break;
                case (degree < 0):
                    result = x;
                    for (var j = 1; j < (degree * (-1)); j++) {
                        result = result * x;
                    }
                    result = 1 / result;
                    break;
                default:
                    result = x;
                    for (var i = 1; i < degree; i++) {
                        result = result * x;
                    }
            }
        }
        console.log ("Number " + x + " in degree " + degree + " is: " + result);
    }
}

