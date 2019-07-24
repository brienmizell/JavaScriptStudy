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

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalsValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalsValues);


var John = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(John.firstName);
console.log(John['lastName']);
var x = 'birthYear';
console.log(John[x]);

John.job = 'designer'
John['isMarried'] = true;

console.log(John);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

// var john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
// var mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + " has a higher bmi of " + john.bmi);
// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + " has a higher bmi of " + mark.bmi);
// } else {
//   console.log("They have the same BMI");
// }

// ****************************************************************************
// ***                              loops                                   ***
// ****************************************************************************

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var john = ["John", "Smith", 1990, "designer", false];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

var john = ["John", "Smith", 1990, "designer", false, "blue"];

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") continue;
//   console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

// looping backwards

// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add the results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};
john.calcTips();
console.log(john);
