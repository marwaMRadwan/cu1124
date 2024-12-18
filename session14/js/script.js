// const showHide = document.querySelector("#showHide")
// const myDiv = document.querySelector("#myDiv")
// showHide.addEventListener("click", function(e){
//     // console.log(this)
//     // console.log(e.target)
//     // console.log(this.innerText.toLowerCase())
//     if((this.innerText.toLowerCase()) == "hide"){
//         myDiv.classList.add("d-none")
//         this.innerText = "show"
//     }
//     else{
//         myDiv.classList.remove("d-none")
//         this.innerText = "hide"
//     }
// })


// let data = [
//     {title: "london", content:"london"},
//     {title: "Paris", content:"Paris"},
//     {title: "Giza", content:"Giza"}
// ]

// let res = data.findIndex((el)=>{
//     return el.title == "Paris"
// })

// let res1 = data.findIndex( el => el.title == "Paris")
// console.log(res)
// const content = document.querySelector("#content")
// const x = document.querySelectorAll(".x")
// x.forEach((el, ind)=>{
//     el.innerHTML = `<h2 class="text-white">${data[ind].title}</h2>`
//     el.addEventListener("click", function(){
//         // console.log(el.getAttribute("data-ref"))
//         // console.log(data[ind])
//         // content.innerText = data[ind].title
//         let dref = el.getAttribute("data-ref")
//         console.log(dref)
//         let res = data.find(d=> d.title == dref)
//         content.innerHTML = `<h2>${res.title}</h2> <div>${res.content}</div>`
//     })
// })

// document.querySelector("#test").style.width="500px"


// document.querySelector(".btn").addEventListener("click", function(){
//     document.querySelector(".menu").classList.add("show")
//     document.querySelector(".menu").classList.remove("hide")
//     this.classList.add("d-none")
// })

// document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".menu").classList.remove("show")
//     document.querySelector(".menu").classList.add("hide")
//     document.querySelector(".btn").classList.remove("d-none")
// })


// if(test=5){

// }

// test == 6


let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")
let current = 0
dots.forEach((dot, i)=>{
    dot.addEventListener("click", function(){
        slides.forEach(s=> s.classList.remove("active"))
        dots.forEach(s=> s.classList.remove("active"))
        dot.classList.add("active")
        slides[i].classList.add("active")
        current = i
    })
})

const after = document.querySelector("#after")
const before = document.querySelector("#before")
after.addEventListener("click", function(){
    current++    
    if(current>dots.length-1) current=0
    slides.forEach(s=> s.classList.remove("active"))
    dots.forEach(s=> s.classList.remove("active"))
    dots[current].classList.add("active")
    slides[current].classList.add("active")
})
before.addEventListener("click", function(){
    current--
    if(current<0) current=dots.length-1
    slides.forEach(s=> s.classList.remove("active"))
    dots.forEach(s=> s.classList.remove("active"))
    dots[current].classList.add("active")
    slides[current].classList.add("active")
})
