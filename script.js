// let a = 5;
// if (a < 5) {
//     console.log("a is smaller than 5");
// }
// else if (a == 5) {
//     console.log("a is equal to 5");
// }
// else {
//     console.log("a is greater than 5");
// }
// a = 10;
// b = 20;

// let c = a > b ? a + b : b - a;
// console.log(c);
// let a = '4';
// let b = a + 3;
// console.log(b);
// c = typeof (b);
// console.log(c);
// let age = 13
// if (age <=10) {

//     console.log("you are not elegable")
// }

// else if (age >=10 && age <=19){

//     console.log("you are elegable")
// }
// else{
//     console.log("you are not to not elegable")
// }


// ?prectis 2===4
// let a = 10;
// if (a / 3 || a / 2) {
//     console.log("this his best for me")

// }
// else {
//     console.log("this his not good for me ")
// }


// ? ternary operater in java scripet
// let age = 18;
// let a = age <= 18 ? console.log("you are not elageble") : console.log("your are elageble")




// ?loops 
// a=1
// for (let i = 0; i < 6; i++) {
//     console.log(a+i)

// }

// while(a<6){
//     console.log(a)
//     a++;
// }

// let i=1;
// while (i<=35) {
//    console.log(i) 
//     i++

// }
//  1 to 10 using for loop

for (let i=1; i <= 10; i--) {
    console.log(i)

}
// 20 to 1 using while loop 
let raj = 20
while (raj>=1) {
    console.log(raj)
    raj--

}

// print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }

// print odd numbers from 1 to 15 using while loop
let i = 1;
while (i <= 15) {
    if (i % 2 === 1) {
        console.log(i)
    }
    i++
}

// print a 5 table
for (let i = 1; i <=10; i++) {
    console.log(`5 * ${i} = ${5*i}`)

}

// find the sum of 1 to 100 using a loop
// let sum=0
// for (let i = 1; i <= 100; i++) {
//      sum=sum+i



// }
// console.log(sum)

// print numbers this numbers devided by 3 and 5 both in 1 to 50

// for (let i = 0; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)

//     }


// }

// take a number by user and program explan ever number his even or odd
// let num = prompt(`type any number`)
// for (let i = 1; i < num; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i}: his a even`)

//     } else {
//         console.log(`${i}:his odd`)
//     }
// }




// ?functions
// function namefuc(name) {
//     console.log("hey " + name + " i am good")
//     console.log("hey " + name + " i to am good")
//     console.log("hey " + name + " my name his" + name)
//     console.log("hey " + name + " i a good explorar")



// }

// function abcd(...raju) {
//     console.log(raju);
// }
// abcd(1,2,3,4,5,6,7,8)

// let valuse ={
// name:"prince",
// age: 19,
// gmail:"fghjk@gmail.com",
// phone:"+91-1234567890"

// }
// for (let raj in valuse) {
//     console.log(raj,valuse[raj])
// }
// namefuc("raju")
// namefuc(2)
// function sum(a,b) {
//     console.log(a+b)

// }
// sum(2,4)

// const Func=(w)=>{
//     console.log("hy this his a arreo function",w)

// }
// Func(34)
// Func(74)
// Func(37)


//  creat a faulty calculater using java script
// this faulty calculater peroform dose following:
// 1. its his tack two numbers by user inputes.
// 2.this his peroform operations ilke this:
// + ---> -
// - ---> /
// * ---> +
// / ---> **
// its his do this 10% times
// 


// function rps(usre, computer) {
//     if (usre === computer) return "match his drow";
//     if (usre === "roak" && computer === "siger") return "usre win";
//     if (usre === "siger" && computer === "paper") return "user win";
//     if (usre === "paper" && computer === "roak") return "user win";
//     if (usre === "siger" && computer === "roak") return "computer win";
//     if (usre === "paper" && computer === "siger") return "computer win";
//     if (usre === "roak" && computer === "paper") return "computer win";


// }
// console.log (rps("paper", "siger"));