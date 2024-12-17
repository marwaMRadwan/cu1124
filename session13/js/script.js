// let x = document.getElementById("one")
// console.log(x)

// let x = document.querySelector("#one")

// x.setAttribute("calss", `${x.getAttribute("class")} xyz`)



// let z = x.getAttribute("class") //cone
// let w = z + " xyz"   // cone xyz
// x.setAttribute("class", w)
// console.log(x.innerText)
// x.innerText = "<h2>hello all</h2>"

// let y = document.querySelector("#one1")
// y.innerHTML = "<h2>hello all</h2>"

// let z = document.querySelector("#one2")
// console.log(z.innerText)
// console.log(z.innerHTML)
// console.log(z.textContent)
// let c = x.getAttribute("xyz")
// console.log(c)
// x.setAttribute("class", "test m x y z")

// let dataWrap = document.querySelector("#dataWrap")
// body.innerHTML = "<div>hello</div>" + body.innerHTML
// body.innerHTML += "<h3>hello</h3>"

// let div = document.createElement("div")
// div.textContent="hello all"
// div.className = "bg-dark text-white col-md-4 col-12"
// dataWrap.appendChild(div)

// let p = document.createElement("p")
// p.innerHTML = "<h3>hello all</h3>"
// div.appendChild(p)

// let t = document.querySelector("#tes")
// t.remove()
// t.removeAttribute("id") 
// let p = t.parentNode
// let z = t.parentElement
// console.log(p)
// console.log(z)
// document.querySelector("#test").parentElement.remove()

// function dispalyAlert(){
//     alert("hello all")
// }



// const add = document.querySelector("#add")
// const data = document.querySelector("#data")
// add.addEventListener("click", function(){
    // console.log(1)
    // console.log(2)
    // dispalyAlert()
    // document.write("helllo")
//     let d = document.createElement("div")
//     d.className = "col-4 bg-dark text-white"
//     d.textContent="test div 1"
//     data.appendChild(d)
// })
// let myData = [
//     {name:"john",age:25},
//     {name:"jane",age:30},
//     {name:"jack",age:35},
//     {name:"jill",age:40},
//     {name:"jim",age:45}
// ]
// const users = document.querySelector("#users")
// myData.forEach((el, ind)=>{
//     console.log(ind+1 , el.name, el.age)
//     const tr = document.createElement("tr")
//     const td1 = document.createElement("td")
//     td1.textContent = ind+1
//     const td2 = document.createElement("td")
//     td2.textContent = el.name
//     const td3 = document.createElement("td")
//     td3.textContent = el.age
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     users.appendChild(tr)

// })



const photos = [
    {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
    }
    ]


    // <div class="col-md-4 col-12p-0 my-3 mx-0">
    //             <div class="p-2  border border-3 ">
    //                 <img src="../session4/images/404.png" class="img-fluid">
    //                 <div class="ps-3 py-3">
    //                     <h3>Title 1</h3>
    //                     <button class="btn btn-danger">Delete</button>
    //                 </div>
    //             </div>
    //         </div>
let data = document.querySelector("#data")
photos.forEach( ( photo, i ) => {
    // data.innerHTML += `${photo.title} <br>`
    // data.innerHTML += `
    // <div class="col-md-4 col-12p-0 my-3 mx-0">   => d1
    //             <div class="p-2  border border-3 "> ==> d2
    //                 <img src="${photo.url}" class="img-fluid"> ==> img
    //                 <div class="ps-3 py-3">
    //                     <h3>${photo.title}</h3>
    //                     <button class="btn btn-danger" >Delete</button>
    //                 </div>
    //             </div>
    //         </div>
    // `
    let d1 = document.createElement("div")
    d1.className = "col-md-4 col-12 p-0 my-3 mx-0"
    data.appendChild(d1)
    let d2 = document.createElement("div")
    d2.className = "p-2  border border-3 "
    d1.appendChild(d2)
    let img = document.createElement("img")
    img.className = "img-fluid"
    img.src = photo.url
    d2.appendChild(img)
    let btn = document.createElement("button")
    btn.className= "btn btn-danger ps-3 my-3"
    btn.textContent = "Delete"
    d2.appendChild(btn)

    btn.addEventListener("click", function(){
        d1.remove()
    })
})
