// Alert is used to show message and it waits until a user presses on OK.
// syntax:- alert(message);
// example:
// alert("its time to finish");
// alert("Only two minutes left hurry up!");



// Prompt is used to take an input from user
// Syntax:- prompt(message, default_input);
// default is used when we are not putting some input inside prompt
// example:
// var ans = prompt("please enter the age?");
// document.write() helps to show the input to the user but for this we need to store the input in var
// document.write(ans);
// console.log(); helps to print the input in the console window
// console.log(ans);

// prompt with default input
// if we are not taking an input and press ok then it takes default value
// if we click on cancel then it takes null value
// var ans1 = prompt("please enter age", 24);
// document.write(ans1);

// function a() {
//     console.lof("Inside a");

//     function b() {
//         console.log("Inside b");
//     }
// }

// b();

// let n=24;
// let l=0, r=100, ans=n;
// while(l<=r)
// {
//     let mid = Math.floor((l+r) / 2);
//     if(mid * mid <= n){
//         ans = mid;
//         l = mid+1;
//     }
//     else{
//         r = mid-1;
//     }
// }
// document.write(ans);

// let num = 10;
// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// document.write(num1);
// document.write(num2);



// function compareMembers (person1, person2 = person) {
//     if (person1 !== person2) {
//     console.log('Not the same!');
//     } else {
//     console.log('They are the same!');
//     }
// }

// const person = { name: 'Lydia' };
// compareMembers (person);

// console.log(20 + 12 * 2 - 10 / 2);

// function test(a, b, c){
//     console.log(a+b*c);
// }
// test(2,3);


// function a() {
//     console.log("Inside a");
    
//     function b() {
//         console.log("Inside b");
//     }
// }
// a();


// if(-1){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// -var a = "A";
// console.log(65 - a);


// console.log(1 + '1');


// console.log(65 + "H")


// function test(a, b) {
//     console.log(a+b);
// }
// test ( 2, 3, 4);


// null==undefined;

// console.log(1 - '1');

// var a;
// console.log(a + "b");


// var a = 10;
// function test() {
// var a = 20;
// }
// test();
// document.write(a);


// var a = 10;
// function test() {
// a = 20;
// }
// test();
// document.write(a);


// var a = 10;
// function test() {
// var a = 20;
// document.write(a);
// }
// test();

// var a = 1;
// function b() {
// a = 10;
// return;
// function a() { }
// }
// b();
// document.write(a);



// function multiply(a, b)
// {
//     return a*b;
// };
// console.log(multiply);


// function demo() {
//     document.write(x);
//     var x = 10;
// }
// demo();

x=5;
document.write(x);
var x;