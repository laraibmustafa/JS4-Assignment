//Loops:
//Exercise 5.1:
let maxValue;
maxValue = prompt("Enter a number between 0 and 10.");
console.log(maxValue);
console.log(Math.random(Math.floor) * 10);
let trackValue;
if (trackValue = (0 <= 10)) {
    console.log(true)
} else {
    console.log * (false)
};

let userInput = prompt("enter a number between 1 and 5")
let result = true;
while (userInput && result.length >= 5) {
    if (result === userInput) {
        console.log("Correct!")
        result = true;
    } else {
        console.log("wrong!")
        result = false;
    }
};

//Exercise 5.2:
let counter;
do {
    let step = prompt("enter a number between 0 and 100")
    console.log("counter");
    counter += step
} while (counter < 100);


for (let i = 0; i < 10; i++) {
    console.log(i);
};

let arr = [];
for (let i = 0; i < 100; i = i + 3) {
    arr.push(i);
};
console.log(arr);

//Exercise 5.3:

let myWork = [];
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson1",
        status: true,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson2",
        status: true,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson3",
        status: false,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson4",
        status: false,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson5",
        status: false,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson6",
        status: true,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson7",
        status: false,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson8",
        status: true,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson9",
        status: false,
    }
    myWork.push(lesson)
};
for (let i = 1; i <= 1; i++) {
    let lesson = {
        name: "Lesson10",
        status: false,
    }
    myWork.push(lesson)
};
console.log(myWork);

//Exercise 5.4:
let myTable = [];
for (let i = 0; i < 10; i++) {
    myTable.push([]);
    myTable.length[i];
    for (let j = 0; j < 20; j++) {
        myTable[i].push(j)
    }
};
console.log(myTable);
console.table(myTable);

//Exercise 5.5: 
let grid = [];
let cells = 64;
let counters = 0;
let currentRow = [];
for (i = 0; i > 64 + 1; i++) {
    if (counters % 8 === 0) {
        grid.push(currentRow);
        currentRow = [];
    }
    currentRow.push("cell $ {counters +1}")
    counters++;
};
if (currentRow.length > 0) {
    grid.push(currentRow);
};
console.log(grid);

//Exercise 5.6:
let new1 = [];
for (i = 0; i < 10; i++) {
    new1.push(i)
}
console.log(new1);
for (i = 0; i < new1.length; i++) {
    console.log(new1[i])
};
for (let value of new1) {
    console.log(value)
};

//Exercise 5.7:
let fruits = {
    item1: "Cherry",
    item2: "Apple",
    item3: "Banana"
};
for (let prop in fruits) {
    console.log(fruits[prop])
}
for (let prop in fruits) {
    console.log(prop)
};
let fruits2 = ["Cherry", "Apple", "Banana"];
for (let prop in fruits2) {
    console.log(fruits2[prop])
};

//Exercise 5.8:

let name = "Exercie";
let skipNumber = "7";
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i === 7) {
        break;
    }
};
//Chapter Project:

// Functions:


//exercise 6.1:
function addTwoPara() {
    let para1 = 1;
    let para2 = 3;
    console.log(para1 + para2)
}
addTwoPara();
let addMore = 5;
let addMore2 = 10
console.log(addMore + addMore2);

//Exercise 6.2:

let descriptiveWords = ["Hello!", "Hi", "Welcome to JS"];
function createDescriptiveWords() {
    let userInput = prompt("Write your name!")
    Math.random(descriptiveWords[0])
    console.log(descriptiveWords[2], userInput + "!")
};
createDescriptiveWords();

//Exercise 6.3:
let x = Number(prompt("Enter a First number"));
let y = Number(prompt("Enter a second number"));
function addNumbers(x, y) {
    let sum = x + y
    console.log(sum)
};
console.log(x + y);
// addNumbers();
let a = Number(prompt("Enter a First number"));
let b = Number(prompt("Enter a second number"));
function addNumbers(a , b){
    let substract = a - b
    console.log(substract)}
    console.log(a - b);


let c = Number(prompt("Enter a First number"));
let d = Number(prompt("Enter a second number"));
function addNumbers(c, d) {
    let multiply = c * d
    console.log(multiply)
};
console.log(c * d);

/


















