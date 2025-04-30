'user strict';

// 1. Create a function that takes an array of numbers and returns the sum of all the numbers in the array.
// function sumArray(arr) {
//     return arr.reduce((acc, num) => acc + num, 0);
// }


// let students = [
//     { name: 'John', age: 20 },
//     { name: 'Smith', age: 23 },
//     { name: 'Jane', age: 30 },]

//     // get the average age of the students
// function getAverageAge(students) {
//     let totalAge = students.reduce((acc, student) => acc + student.age, 0);
//     return totalAge / students.length;
// }
// console.log(getAverageAge(students)); 

// // sort by name descending
// function sortByNameDescending(students) {
//     return students.sort((a, b) => b.name.localeCompare(a.name));
// }

// let studentWithJ = function getSAtudents(students) {
//     return students.filter(student => student.name.startsWith('J'));
// }

// console.log(studentWithJ(students)); 

// //find student whose name starts with 'J'
// let student = function findStudentWithJ(students) {
//     return students.find(student => student.name.startsWith('J'));
// }


// console.log(student(students));



// 1 -a 

function computeSquareSum(arr) {
    return arr.reduce((acc, num) => acc + Math.pow(num, 2), 0);
}

// 1-b
function printOddNumbersOnly(arr){
    for(num of arr){
        if(num % 2 !== 0){
            console.log(num);
        }
    }
}


// 1-c

function printFibo(n, a, b) {
    if (n <= 0) {
      console.log('');
      return;
    }
  
    const fibo = [a];
    if (n > 1) fibo.push(b);
  
    while (fibo.length < n) {
      const next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
      fibo.push(next);
    }
  
    console.log(fibo.join(', '));
  }
  
  printFibo(1, 0, 1);  
  printFibo(2, 0, 1);  
  printFibo(3, 0, 1); 
  printFibo(6, 0, 1);  
  printFibo(10, 0, 1);


  // 2-a


  let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name);   
console.log(age);     
console.log(isAdmin); 



let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
    ];

function addBookToLibrary(title, author, year, ID) {

    let book = libraryBooks.find(book => book.title === title);
    if (book) {
        console.log(`Book "${title}" already exists in the library.`);
        return null;
    }
    book = {
        title,
       author,
        year,
        ID
    };
    libraryBooks.push(book);
    console.log(`Book "${title}" added to the library.`);
    return book;
}

function getTitles(){
    return libraryBooks.map(book => book.title).sort((a, b) => a.localeCompare(b));
}

function getBooksByTitle(title) {
    return libraryBooks.filter(book => book.title === title).sort((a, b) => a.ID - b.ID);
}



