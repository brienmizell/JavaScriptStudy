/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);
*/

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
 
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

// var year, yearJohn, yearMark;
// now = 2018
// ageJohn = 28;
// ageMark = 33;
// yearJohn = now - 28;
// yearMark = now - 33;

// console.log(yearJohn);
// console.log(now + 2);

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log( isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 
console.log(x);
console.log(x, y);

x *= 2;
console.log(x);

x += 10;
console.log(x);

x++
console.log(x);
x--;
console.log(x);

*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀

var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;

markMass = 78; // kg
johnMass = 92; // kg
markHeight = 1.69; // meters
johnHeight = 1.95; // meters
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass/ (johnHeight * johnHeight);
console.log("Mark's BMI is " + markBMI + ".")
console.log("John's BMI is " + johnBMI + ".")
var markVsJohn = markBMI >= johnBMI;
console.log("Is Mark's BMI higher than John's? " + markVsJohn);


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefuly marry soon.')
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefuly marry soon.')
}

var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;

markMass = 78; // kg
johnMass = 92; // kg
markHeight = 1.69; // meters
johnHeight = 1.95; // meters
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass/ (johnHeight * johnHeight);
console.log("Mark's BMI is " + markBMI + ".")
console.log("John's BMI is " + johnBMI + ".")
var markVsJohn = markBMI >= johnBMI;
console.log("Is Mark's BMI higher than John's? " + markVsJohn);

if (markBMI > johnBMI) {
    console.log('Mark\' BMI is higher than John\'s.')
} else {
    console.log('John\' BMI is higher than Mark\'s.')
};

var firstName = 'John';
var age = 20;

if (age < 13) {
    conosle.log(firstName + ' is a boy.');
}else if (age >= 13 && age < 20) {
console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
    } else {
    console.log(firstName + ' is a man.')
}


var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age>= 18? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}



//switch statement.

var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.')
    case 'driver':
        console.log(firstName + ' drives an upber in Lisbon.')
    case 'designer':
        console.log(firstName + ' designs beautiful websites.')
    default:
        console.log(firstName + ' does something else.')
}
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + 'is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.')
}

age = 55;
if (age < 13) {
    console.log(firstName + ' is a boy.');
}else if (age >= 13 && age < 20) {
console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
    } else {
    console.log(firstName + ' is a man.')
}



var height;
height = 30;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}

if (height == '23') {
    console.log('The == operator does type coercion');
}

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreJohn, scoreMike)

if (scoreJohn > scoreMike) {
    console.log('John\'s average score(' + scoreJohn + ') is higher than Mike\'s(' + scoreMike + ') average score.');
} else {
    console.log('Mikes\'s average score(' + scoreMike + ') is higher than John\'s average score.');
}

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageBrien = calculateAge(1981);
console.log(ageBrien);

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if() retirement > 0)
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1981, 'Brien');
yearsUntilRetirement(1979, 'Brooks')


// function declaration
// function whatDoYouDo(job, firstName) {}

// function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log (names[2]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.')
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer.';
console.log(isDesigner);