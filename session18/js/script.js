// function x(){
//     return function(){
//         console.log("Hello, World!");
//     }
// }

// console.log(x()())

//clouser
// function myClouser( name="", age=0 ){
//     return{
//         name: name,
//         age: age,
//         constructData: function(name, age){ 
//             this.name=name
//             this.age = age
//         },
//         editage: function(){ this.age+=3},
//         printUser : function(){
//             console.log(`Name: ${this.name}, Age: ${this.age}`);
//         }
//     }
// }

// let userData = myClouser("marwa",40)
// userData.editage()
// console.log(userData.age)
// userData.printUser()


// let user = myClouser()
// user.constructData("marwa",40)


// function numbers(x,y){
//     return {
//         x: x,
//         y:y,
//         add: function(){
//             return this.x+this.y
//         },
//         mul: function(){
//             return this.x*this.y
//         },
//         inc:function(attr){
//             if(attr == "x") this.x++
//             else this.y++
//         }
//     }
// }

// let myData = numbers(5,3)
// myData.inc("y")
// console.log(myData.y)



// setTimeout(()=>{console.log(1)}, 2000)
// setTimeout(()=>{console.log(2)}, 4000)
// setTimeout(()=>{console.log(3)}, 2500)
// setTimeout(()=>{console.log(4)}, 3000)
// setTimeout(()=>{console.log(5)}, 500)

// let data = fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
// console.log(data)

// fetch("https://jsonplaceholder.typicode.com/photos?_limit=9")
// .then(r=> console.log(r.json()))
// .catch(e=>{})

// async function callApi(){
// const callApi = async function(){
// const callApi = async() =>{
//     try{
//         const apiLink = "https://jsonplaceholder.typicode.com/photos?_limit=9"
//         const data = await fetch(apiLink)
//         const result = await data.json()
//         console.log(result)
//     }
//     catch(e){
//         console.log(e)
//     }   
// }
// callApi()
// let c1 = document.querySelector("#c1")
// for(let i=0; i<=10; i++){
//     setTimeout(()=>{
//         console.log(i);
//         c1.innerHTML = i 
//     }, 2000)
// }

// var i = 1;                 
// function myLoop(x) {        
//   setTimeout(function() {  
//     c1.innerHTML=i
//     i++;                    
//     if (i <= x) {           
//       myLoop(x);             
//     }                       
//   }, 50)
// }

// myLoop(50);                   


const callApi = async(cb) =>{
    try{
        const apiLink = "https://jsnplaceholder.typicode.com/photos?_limit=9"
        const data = await fetch(apiLink)
        const result = await data.json()
        cb(result, false)
    }
    catch(e){
        cb(false, e)
    }   
}
callApi( (res)=>{
    // if(err) console.log("something want wrong")
    // else 
    console.log(res)
})
