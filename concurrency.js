// // ------> CALLBACKS <-------
// function doSomething(callback) {
//     callback(); 
// }

// function sayHi() {
//     console.log("Hi!");
// }

// doSomething(sayHi); 

// Function to judge the grade
// function judge(grade) {
//     switch (grade) {
//         case 'A':
//             console.log("You got an", grade, ": amazing");
//             break;
//         case 'B':
//             console.log("You got a", grade, ": well done");
//             break;
//         case 'C':
//             console.log("You got a", grade, ": alright");
//             break;
//         case 'D':
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("Whattt!!");
//     }
// }

// // Function to get the grade based on score and pass it to callback
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case (score >= 90):
//             grade = 'A';
//             break;
//         case (score >= 80):
//             grade = 'B';
//             break;
//         case (score >= 70):
//             grade = 'C';
//             break;
//         case (score >= 60):
//             grade = 'D';
//             break;
//         default:
//             grade = 'F';
//     }
//     callback(grade); 
// }


// getGrade(85, judge); 

//------> Promises <-------
// this function needs two promises and these parameters are again callbacks.We have called them resolve and reject here
// let promise = new Promise(function(resolve, reject) {
//     let x = 20;
//     if (x > 10) {
//         resolve(x);
//     } else {
//         reject("too low");
//     }
// });

// promise.then(
//     function(value) {
//         console.log("Success:", value);
//     }
// ).catch(
//     function(error) {
//         console.log("Error:", error);
//     }
// );
// .then(value=>{
//     console.log(value);
//     return "we";
// })

// const promise = new Promise((resolve, reject) => {
//     resolve("success!");
// });

// promise
//     .then(value => {
//         console.log(value);   
//         return "we";
//     })
//     .then(value => {
//         console.log(value);   
//         return "can";
//     })
//     .then(value => {
//         console.log(value);   
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);   
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);   
//     })
//     .catch(error => {
//         console.log(error);
//     });