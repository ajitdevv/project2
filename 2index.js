//! DOM ===> document object model

// ? HTML selecter ===> this his many types like this 1. getElementById  ,2.getElementsByClassName  ,3.getElementsByName  ,4.getElementsByTagName ,5.getElementsByTagNameNS   ,6.querySelector   ,7.querySelectorAll
// let h1=document.querySelector("h1")  /*====> then log dont work then use dir */
// console.dir(h1)


//? nested selecter
// let text = document.querySelector(".container div")
// console.dir(text)


// q.1 sfont select all p and changfont size =25xp
// let allp = document.querySelectorAll("p")
// console.dir(allp)
// allp.forEach(function (ele) {
//     ele.style.fontSize = "25px"


// });


// ! text menuplation
//?  click menuplution
// let h1=document.querySelector("h1")
// console.dir(h1)
// h1.addEventListener("click",function (val) {

//    h1.style.fontSize ="10px"
// })

// let p=document.querySelector(".home .home-article .heading p")
// console.dir(p)
// p.addEventListener("click",function () {
//     p.style.color="green"
// })
let home_p = document.querySelector(".about .about-article .about-article--headings p")
console.dir(home_p)
home_p.addEventListener("click", function () {
    home_p.style.color = "red"
})