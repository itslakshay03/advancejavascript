// function sayHello()
// {
//     let you=prompt("what's your name?");
//     console.log("hello",you+"I")
// }
// sayHello();


// let varContainingFunction=function(){
//     let varInFunction="I'm in a function.";
//     console.log("hi there ",varInFunction); 
// };
// varContainingFunction();


// let TextDecodeStream(para1,para2){
//     return para1+" "+para2;
// }
// const arg1="argument1";
// const arg2="argument2";
// tester(arg1,arg2);


// function addNumbers(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
// }

// const result = addNumbers("10", "20");
// console.log(result); 


// function tester(para1,para2){
//     return para1+" "+para2;
// }
// const arg1="argument1";
// const arg2="argument2";
// console.log(tester(arg1,arg2));

// function addNumbers(num1,num2){
//     return parseInt(num1)+parseInt(num2);
// }
// const result=addNumbers("10","20");
// console.log(result);


// function addNumbers(num1=2,num2=3){          //last_arg= default value always
//     return parseInt(num1)+parseInt(num2);
// }
// const result=addNumbers("6","6");
// const result2=addNumbers("10");
// const result3=addNumbers("1","2","3","4");
// console.log(result);
// console.log(result2);
// console.log(result3);


// ARROW FUNCTIONS

// let doingStuff=(x)=>{
//     console.log(x)
// }
// doingStuff("hello world");
// doingStuff(123);
// doingStuff("12345");

// let addTwoNUmber=(x,y)=>{
//     console.log(x+y);}
//     addTwoNUmber(11,22);

// const arr=["squirrel","alpaca","buddy"];
// arr.forEach(e=>console.log(e));

//SPREAD OPERATOR------>

// let spread=["so","much","fun"];
// let message=["JavaScript","is",...spread,"and","very","powerful"];
// let message1=["JavaScript","is",spread,"and","very","powerful"];
// console.log(message);
// console.log(message1);

// REST OPERATOR---->
// function addTwoNUmber(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNUmber(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2);

//REST PARAMETER---->

// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there","how are you");

function addTwoNumbers(a,b){
    return a+b;
}
let resultArr=[4,5];
for(let i=0; i<10; i++){
    let result=addTwoNumbers(i,2*i);
    resultArr.push(result);
}
console.log(resultArr)