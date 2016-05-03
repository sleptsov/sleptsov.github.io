function Human(name, age, gender, height, weight){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

function Worker(job, salary){
    this.job = job;
    this.salary = salary;
    this.earn = function(sum){
        salary += sum;
        return "Earn " + sum + ". All money " + salary;
    };
    this.__proto__ = new Human('Lenny', 45, 'male', 189, 87);
}

function Student(university, scholarship){
    this.university = university;
    this.scholarship = scholarship;
    this.watchSoap = function(soap){
        return "watching " + soap + " now.";
    };
    this.__proto__ = new Human('Bart', 16, 'male', 168, 60);
}

var Homer = new Human('Homer Simpson', 50, 'male', 178, 89);

var Lenny = new Worker('Nuclear Power Station', 200);

var Bart = new Student('Springfield School', 5);


var taskBtn = $('#task16-btn');
taskBtn.on('click', function(){
    console.log('Human', Homer.name, Homer.age, Homer.gender, Homer.height, Homer.weight);
    console.log('Worker', Lenny.name, 'is ' + Lenny.age + ' years old.');
    console.log('Student', Bart.name + ' is ' + Bart.watchSoap('Game of Thrones'));
});




