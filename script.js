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


// ! prectis 2===4
// let a = 10;
// if (a / 3 || a / 2) {
//     console.log("this his best for me")

// }
// else {
//     console.log("this his not good for me ")
// }


// ! ternary operater in java scripet
// let age = 18;
// let a = age <= 18 ? console.log("you are not elageble") : console.log("your are elageble")




// ! loops 
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

// for (let i=1; i <= 10; i--) {
//     console.log(i)

// }
// 20 to 1 using while loop 
// let raj = 20
// while (raj>=1) {
//     console.log(raj)
//     raj--

// }

// print even numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }

// print odd numbers from 1 to 15 using while loop
// let i = 1;
// while (i <= 15) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
//     i++
// }

// print a 5 table
// for (let i = 1; i <=10; i++) {
//     console.log(`5 * ${i} = ${5*i}`)

// }

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




// ! functions
// function namefuc(name) {
//     console.log("hey " + name + " i am good")
//     console.log("hey " + name + " i to am good")
//     console.log("hey " + name + " my name his" + name)
//     console.log("hey " + name + " i a good explorar")



// }
// function raju(aj) {
//     aj()

// }
// raju(function ram(pr) {
//     console.log("hi")

// })

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
// console.log (rps("paper", "siger"));nction

// ? closer => one function this his return one more function and this return function call any one varible of parent function 


// function raj() {

//     let r=1;
//     return function () {
//         console.log(r);
//     }

// }



// ! Array

// let arr = [1,2,3,4,5,]
// arr[2]=20;



// ? push
// let raj = [1,2,3,4,5]
// raj.push(6);
// ? pop
// let arm = [1,2,3,4,5,6]
// arm.pop()
// ? shift
// let ram =[1,2,3,4,5,6,7]
// ram.shift();
// ? unshift
// let raju = [1,2,3,4,5,6]
// raju.unshift(0)
// ? splice
// let ramu=[1,2,3,4,5,6,7]
// ramu.splice(4,2) ===> there 4 his the position of the index for start splice and 2 his the count of remove numbers like this there Array his [1,2,3,4,5,6,7] then 4 his index position according to this array 5=index 4 and 2 his count like this 5 and 6
// then array his the [1,2,3,4,7] 

// ? slice ===> this his extract array form execting array and not chang execting array
// let i=[1,2,3,4,5,6,7]
// let newi=i.slice(3,6)
// ? reversing of a array 
// let a=[1,2,3,4,5]
// a.reverse()
//? array shorting 
// 1. acending order ===> 1,2,3,4,5,6......
// let rt=[1,23,34,34,76,56]
// let ram=rt.sort(function raju(alp,blp) {
//     return alp-blp;

// })
// 2. disending order ===> .....6,5,4,3,2,1
// let or=[1,45662,32,46,56,5676]
// let rah=or.sort(function disnding(a,b) {
//     return (b-a)

// })
// console.log(rah)

// ? map ===> map function use for then make a array consider exectiong array .. map jha bhi dikhe sath me ek arry bna liya kro
// let arr=[1,2,3,4,5,6]
// let newarr=arr.map(function raj(val) {
//     return 2;

// })
// console.log(newarr)

// quation.... add 5 in veery element of given array ==> [1,2,3,4,5,6]
// let arr=[1,2,3,4,5,6]
// let newarr=arr.map(function raj(juu) {
//     return (juu+5)
// })
// console.log(newarr)

// ? filter ===> this his tacks true and false you use any type of conditions but result give true and false
// let arr=[1,2,3,4,5,6]
// let newarr=arr.filter(function arj(val) {
//     if (val<4) {
//         return true;

//     }

// 
// ? reduce ===> reduce the array and give a singl value using return
// let arr=[1,2,3,4,5,6]
// let newarr=arr.reduce(function raj(acumlater ,val) {
//     return(acumlater+val)
// },0)
// console.log(newarr)
// ? find ===> this his find in array using given function
// let arr = [{ id: 1, key: 1 },
// { id: 2, key: 3 },
// { id: 3, key: 2 },
// { id: 4, key: 3 },]
// let arre = arr.find(function (vall) {
//     return vall.key === 1;

// });
// console.log(arre)

// ? some ===> this his give true and false
// let arr=[12,23,45,76,45]
// let arre=arr.some(function ram(val) {
//     return val>75

// }) 
// ans::true because 75 his lessthen 76  
// let arr=[12,23,123,43,234]
// let arre=arr.some(function ram(ra) {
//     return ra>1000
// })
// console.log(arre)
// ans::false because 1000 his not smallthen any array===arr valuse

// ? disturichuring  
// let arr=[1,2,3,4,5,6,7]
// let [a,s,,fg]=arr
// console.log(a,s,fg)
// ? sprder operater ==> this his crater a copy of a execting array but then chang in new array then this changes not refelect in old (perante array)
// let arr=[1,2,3,4,5,6]
// let newarr=[...arr]
// newarr.pop()   (remove last element using pop operation)

//  quations
// ? creat a array with 3 frouts name and output his second frout name  
// let arr=["aam","khajur","sitafal"]
// let arre=arr.at(1);
// console.log(arre)

// ? add in biggening mango and add in end paieapple in array
// let arr=["aam","khajur","sitafal"]
// arr.push("paieapple")
// arr.unshift("mango")
// console.log(arr)

// ? replace sitafal with kiwi
// let arr=["aam","khajur","sitafal"]
// arr.pop()
// arr.push("kiwi")
// console.log(arr)
// ? add red and blue at index 1 in arr=["wer","wefg","asd"]
// let arr=["wer","wefg","asd"]
// arr.splice(1,0,"red","blue")
// console.log(arr)
// ? extract 3 elements from the middle this array or=[1,45662,32,46,56,5676]
let or=[1,45662,32,46,56,5676]
let newor=or.slice(2,5)
// ans==[32, 46, 56] 
// ? short his array  ===> arr=["wer","yhjm","hjm","hjk"] ,according to alphabets 
// let arr=["wer","yhjm","hjm","hjk"]
// arr.sort()
// arr.reverse()
// ans==['hjk', 'hjm', 'wer', 'yhjm']
// ? revers his array  ===> arr=['hjk', 'hjm', 'wer', 'yhjm'] 
// let arr=["wer","yhjm","hjm","hjk"]
// arr.sort()
// arr.reverse()
// ans==['yhjm', 'wer', 'hjm', 'hjk']
// ? use .map finding each number square of this array ==> arr=[1,2,3,4,5,6,7]
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let newarr=arr.map(function arra(val) {
//     return (val*val)
// })
// // ans==[1, 4, 9, 16, 25, 36, 49]

// ? filter the array and only output his grater 10 to this array arr=[1,7,3,7,3,498,345,5,26,12,5,8]
// let arr=[1,7,3,7,3,498,345,5,26,12,5,8]
// let newarr=arr.filter(function ram(val) {
//     return(val>10)

// })
// ans==[498, 345, 26, 12]

//? find sum of every Element of this array arr=[1,7,3,7,3,498,345,5,26,12,5,8]
// let arr=[1,7,3,7,3,498,345,5,26,12,5,8]
// let newarr=arr.reduce(function rsjs(accu , val) {
//     return accu+val

// },0)
// ans==920
// ? find the first number of lessthen 10 of this array [498, 345, 26, 12,9,10,23,5,6,7]
// let arr = [498, 345, 26, 12, 9, 10, 23, 5, 6, 7]
// let newarr = arr.find(function rak(val) {
//     return val < 10
// })
// ans=9
// ? check for every student any have lessthen 35 number from this array let arr = [498, 345, 26, 12, 9, 10, 23, 5, 6, 7]
// let arr = [498, 345, 26, 12, 9, 10, 23, 5, 6, 7]
// let newarr=arr.some(function are(val) {
//     return val<35

// })
// ans:true
//? check all numbers are even of this array let arr = [498, 345, 26, 12, 9, 10, 23, 5, 6, 7]
// let arr = [498, 345, 26, 12, 9, 10, 23, 5, 6, 7]
// let newarr=arr.some(function are(val) {
//     return val/2===0

// })

// ? using disturecter sperate first name and last name of array arr=["anuj","vanuj"]
// let arr=["anuj","vanuj"]
// let [firstname,lastname]=arr;
// add both arrays arr = [498, 345, 26, 12, 9, 10, 23, 5, 6, 7],arr=[1,7,3,7,3,498,345,5,26,12,5,8]
// let arr = [498, 345, 26, 12, 9, 10, 23, 5, 6, 7]
// let newarr=[1,7,3,7,3,498,345,5,26,12,5,8,...arr]
// ans:[1, 7, 3, 7, 3, 498, 345, 5, 26, 12, 5, 8, 498, 345, 26, 12, 9, 10, 23, 5, 6, 7]


// ! objects  ===> this his simller to arrays but this his very usefull 
// ? syntex
// let obj={
// name: "prince",
// age: 19,
// time:12.25,
// day:"monday",

// }

// ? access with . oprater
// let obj={
// name: "prince",
// age: 19,
// time:12.25,
// day:"monday",

// }
// console.log(obj.age)
// console.log(obj.time)
// console.log(obj.name)

// ? access using [] operater
// let obj={
// name: "prince",
// age: 19,
// time:12.25,
// day:"monday",

// }
// console.log[]******

// ? nesting in objects
// let obj = {
//     name: "prince",
//     age: 19,
//     time: 12.25,
//     day:{
//         aget: 119,
//         timel: 12.2567,
//         ram:"khana khata h",
//         sham:{
//             raju:20,
//             samu:34,
//             vikki:24,
//         },
//     },
// }
// ? deep access 
// console.log(obj.day.sham.vikki)
// ans:24

// ? dsturicting ===> this his use reduse code for deep accessing for multiple times 
// let {vikki}=User.obj.day.sham =====> console.log(obj.day.sham.vikki) then agaion access vikki then use only vikki not console.log(obj.day.sham.vikki) and let {vikki}=User.obj.day.sham
// ? deep copy 
// let obj = {
//     name: "prince",
//     age: 19,
//     time: 12.25,
//     day:{
//         aget: 119,
//         timel: 12.2567,
//         ram:"khana khata h",
//         sham:{
//             raju:20,
//             samu:34,
//             vikki:24,
//         },
//     },
// }
// let obj2=JSON.parse(JSON.stringify(obj))
// console.log(obj2)