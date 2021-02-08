/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = (l1,l2) => l1*l2;

console.log(area(2,4));




/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (x,y) {
    if (x===y) {
        return x*3;
    } else {
        return x+y;
    }
}

console.log(crazySum(2,7));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(num) {
    if (num>19) {
       return  (Math.abs(num-19)*3)
    } else  {
        return (Math.abs(num-19))
    }
}

console.log(crazyDiff(-26));
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n) {
    if (n>=20 && n<=100 || n===400) {
        return true;
    } else return false
}

console.log(boundary(50));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(word) {
    if (word.startsWith("Strive")) {
        return word;
    } else {
        return ("Strive " + word)
    }
}

console.log(strivify("Hello"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(num) {
    if (num<1) {
       return console.log("not a positive number");
    } else {
        if (num%3===0 || num%7===0) {
          return  console.log(` ${num} is a multiple of 3 or 7`);
        }
    }
}

check3and7(14);

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(word) {
    return (word.split("").reverse().join(""))
}

console.log(reverseString("hello"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(givenString) {
  givenString = givenString.split(" ");
  for (let i=0;i<givenString.length;i++) {
      givenString[i] = givenString[i].replace(givenString[i][0],givenString[i][0].toUpperCase()) 
  }
 
return givenString.join(" ")
}

console.log(upperFirst("hey whats up"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(word) {
    return word.slice(1, word.length-1);
}
console.log(cutString("hello"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) {
    let randomArray =[];
    for (i=0;i<n;i++) {
        randomArray.push(Math.floor(Math.random() * 11))
    }
    return randomArray;
}

console.log(giveMeRandom(20));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/

