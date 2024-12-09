//any
// let x = prompt("vsghavah")
//void
// alert("test")

// helloWroldAllAny
// x=5  //var
// let z = "marwa"
// printData()
// printData1(z)
// console.log(z)
// function printData(){
//     console.log("hello")
// }

// function printData1(input){ //let input
//     //input = "marwa"
//     input = "hdgsy"
//     console.log(input)
// }

// let num1 = +prompt("enter 1st val")
// console.log(isNaN(num1) )
// let num2 = +prompt("enter 2nd val")
// let result = add(num1,num2)
// console.log(add(num1, num2 ))

// function add( x=3 , y=5,  z=0 ){
//     if( isNaN(x) || isNaN(y) || isNaN(z) ) {
//         alert("invalid inputs")
//         return
//     }
//         let result = x+y + z
//         return result
// }
// add("*",5,3,5)
// add("+",2,3)
// add()
// add(7)
// let x= 5, y=6
// sum(x,y)

// function sum(n1=5, n2=6){
//     return n1+n2 // 11
// }

// function calc(op , a , b , c =0 ){
//     if(isNaN(a) || isNaN(b) || isNaN(c)) return
//     let result
    // if(op == "+") result = a + b + c
    // else if( op == "*") result = a * b * c
    // else if
//     switch(op){
//         case "+": result = a + b + c; break
//         case "*": {
//             if(c==0) c=1; 
//             result = a * b * c; 
//             break
//         }
//         case "/": { 
//             if(c==0) c=1;
//             result = a / b / c; 
//             break 
//         }
//         case "-": result = a - b - c; break
//         default: result = "invalid operation"
//     }
//     console.log(result)
// }

// calc( "*" , 5 , 5  )

// var let const
// function test(){
//     var w = "hello"
//     console.log(PI)
// }
// test()

// console.log(w)
// var x = 5
// let z = 3
// const PI = 3.14
// var w = "ay 7aga"

// if(true){
//     let z = 5
//     var w = 7
// }

// console.log(z) //5
// console.log(w); // 7


// const test = function(){
//     console.log("hello")
// }

// arrow function
// const test1 = (a,b) => {
//     console.log("hello")
//     return
// }

// const add  = (a,b) =>  a+b 
/*
const add = (a,b) => {
    return a+b
    }
*/
// add(5,3)
// test()

// let marwa = {
//     "name": "marwa",
//     "age": 40,
//     "address":{
//         "city": "cairo",
//         "country": "egypt"
//     },
//     "mobile phone": "01234567899"
// }

// console.log(marwa["mobile phone"])
// marwa["name"]
// marwa.name


// let user = {
//     "name": "ahemd",
//     "age":27,
//     "email": "ahmed@test.com",
//     "phone":"01234567899",
//     "address":{
//         "build_num": 7,
//         "floor_num" :3,
//         "street name": "salah salem"
//     },
//     display: function(){
//         console.log(this)
//     }
// }

// // console.log(user.address["street name"])
// // user["age"]
// user.name= "hasnen"
// delete user.age
// user.hhh= "hhhhh"
// user.display()
// let data = {
//     x: +prompt("enter data"),
//     y: +prompt("enter data"),
//     z:+prompt("enter data"),
//     add: function() { return this.x + this.y + this.z},
//     sub : function() { return this.x - this.y - this.z}
// }

// console.log(data.sub())


// let counties = {
//     "1": "egypt",
//     "2": "plastine",
//     "3": "canada",
//     "4": "jordon"
// }
// counties["1"]="test"
// console.log(counties[1])
// for(let key in counties){
//     console.log(`${key} => ${counties[key]}`)
// }

let arr = [1,2,3,"hello", "x", true, false ]
arr.push("ghdfdhy")

// arr[1]= "test"
// console.log(arr)

// for(let index = 0 ; index < arr.length; index++){
//     console.log(arr[index])
// }
arr = [5,10,15,7,3,1,-1]

// arr.shift()
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(90)
// console.log(arr)
// arr.push(80)
// console.log(arr)

// let sum = 0

// arr.forEach((element, i) => sum += element );
// console.log(sum)
// console.log(arr.includes(555))

// console.log(arr.toString())

// console.log(arr.indexOf(555))

// user = { name:"x", age:"Y"}
// console.log(typeof arr)

// console.log(typeof user)

// console.log(Array.isArray(arr))

// let data = ["marwa", "radwan"]
// console.log( data.join(" "))
arr = ["a", "b", "c", "d", "e"]
console.log(arr)
arr.splice(2, 2)
console.log(arr)
