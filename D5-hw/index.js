/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/

let a = "string"

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/

let sum = 10 + 20;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/

let randomNumber = Math.floor(Math.random() * 21);
console.log("random_num:", randomNumber);

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Slavko",
    surname: "Josipović",
    age: 25
}


/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age;


/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/

me.skills = ["Javascript", "HTML", "CSS", "SQL"]

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/

me.skills.pop();

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/

const dice = function () {
    return Math.floor(Math.random() * (7 - 1) + 1);
}
console.log("dice:", dice());

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/

const whoIsBigger = function (x, y) {
    if (x > y && x !== y) {
        return x;
    } else if (x === y) {
        return ("same numbers");
    } else return y;

}

console.log("bigger is: ", whoIsBigger(3, 3));

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const splitMe = function (word) {
    return word.split(" ")
}
console.log(splitMe("I Love Coding"));
/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/

const deleteOne = function (givenString, b) {
    if (b) {
        return givenString.slice(1, givenString.length)
    } else return givenString.slice(0, givenString.length - 1)
}
console.log(deleteOne("hello", false));
/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const onlyLetters = function (givenString) {
    return givenString.replace(/[0-9]/g, "").replace(/\s+/g, ' ').trim()
}

console.log(onlyLetters("I love 123 whatever"));

/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/

const isThisAnEmail = function (email) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
        return true
    } else return false
}

console.log("isthisvalidemail", isThisAnEmail("slavkoj6@gmail.com"))

/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/

const whatDayIsIt = function () {
    const d = new Date();
    const day = d.getDay();
    const dayofTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayofTheWeek[day]
}

console.log("dayoftheweek:", whatDayIsIt())

/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

const rollTheDices = function (num) {
    const diceLog = {
        sum: 0,
        values: []
    }
    for (i = 0; i < num; i++) {
        diceLog.values.push(dice());
        diceLog.sum += diceLog.values[i];
    }
    return diceLog;
}

console.log(rollTheDices(5));



/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/
const d = new Date();
const howManyDays = function (date, month, year) {
    const recievedDate = new Date(year, month - 1, date);
    const today = d.getTime();
    const oneDay = 1000 * 3600 * 24; //one day in ms
    return (Math.floor((today - recievedDate) / oneDay));
}


console.log("date difference:", howManyDays(02, 1, 2021))

/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/

const isTodayMyBDay = function () {
    const myBday = new Date(1995, 01, 05);
    const todayDate = new Date().getTime();
    const todayinFormat = new Date(todayDate)
    if (myBday.getMonth() === todayinFormat.getMonth() && myBday.getDate() === todayinFormat.getDate()) {
        return true;
    } else return false;
}
console.log(isTodayMyBDay());
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

const movies = [{
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Year: "2001",
        imdbID: "tt0120737",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Return of the King",
        Year: "2003",
        imdbID: "tt0167260",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Two Towers",
        Year: "2002",
        imdbID: "tt0167261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "Lord of War",
        Year: "2005",
        imdbID: "tt0399295",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "Lords of Dogtown",
        Year: "2005",
        imdbID: "tt0355702",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings",
        Year: "1978",
        imdbID: "tt0077869",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1990",
        imdbID: "tt0100054",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
        Title: "The Lords of Salem",
        Year: "2012",
        imdbID: "tt1731697",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
        Year: "1984",
        imdbID: "tt0087365",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1963",
        imdbID: "tt0057261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
]

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/
const deleteProp = function (obj, str) {
    delete obj[str];
}
// deleteProp(movies[0],"Type");
console.log(movies[0]);

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

const olderMovie = function (a, b) {
    if (parseInt(a["Year"]) < parseInt(b["Year"])) {
        return a["Title"]
    } else if (parseInt(b["Year"]) < parseInt(a["Year"])) {
        return b["Title"]
    }
}

console.log("OLDER MOVIE IS:", olderMovie(movies[0], movies[1]));

/* Ex.13
    Write the function countMovies that returns the number of movies into the array. 
*/

// I dont really understand the task, is there really a need for a function here?

const countMovies = function () {
    return movies.length //????
}

console.log("movies length:", countMovies())


/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/

const onlyTitles = function () {
    const titleArray = [];
    for (let i = 0; i < movies.length; i++) {
        titleArray.push(movies[i]["Title"])
    }
    return titleArray;
}

console.log(onlyTitles());

/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/

const onlyThisMillennium = function () {
    const onlyThisMillenniumArray = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i]["Year"] >= 2000) {
            onlyThisMillenniumArray.push(movies[i]["Title"])
        }
    }
    return onlyThisMillenniumArray;
}

console.log("movies of this millenium", onlyThisMillennium());



/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/

const getMovieById = function (id) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i]["imdbID"] === id) {
            return movies[i]["Title"]
        }
    }
}
console.log("moviebyid:", getMovieById("tt4154756"));

/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/

const sumYears = function () {
    let movieYearSum = 0;
    for (i of movies) {
        sum += parseInt(i["Year"]);
    }
    return sum;
}
console.log("sum of the years: ", sumYears());
/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/

const searchMovie = function (str) {
    const searchMovieArray = [];
    for (i of movies) {
        if (i["Title"].toLowerCase().includes(str.toLowerCase())) {
            searchMovieArray.push(i["Title"])
        }
    }
    return searchMovieArray;
}
console.log("search movie by string: ", searchMovie("AveNger"));

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

const searchAndDivide = function (str) {
    const movieObject = {
        match: [],
        nonMatch: []
    }
    for (i of movies) {
        if (i["Title"].toLowerCase().includes(str.toLowerCase())) {
            movieObject.match.push(i["Title"])
        } else {
            movieObject.nonMatch.push(i["Title"])
        }
    }
    return movieObject;
}

console.log(searchAndDivide("Avenger"));

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const deleteX = function (num) {
    arr.splice(num, 1);
    return arr;
}
console.log(deleteX(4));

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

const halfTree = function (height) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < i+1; j++) {
            process.stdout.write("*");
        }
        console.log("");
    }
}

halfTree(6);

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

const tree = function(height) {
    for (let i=0;i<height;i++) {
        for (let j=0;j<height+2;j++) {
  //INCOMPLETE
        }
    }
}

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/

const isItPrime = function(num) {
    if (num===2) {
        return true;
    } else if (num>1) {
        for (let i=2;i<num;i++) {
            if (num%i===0) {
                return false
            } 
        }
        return true
    }
}

console.log("isitprime:",isItPrime(18))

/* Movies array is an example array, used for the exs. Don't change it :)  */