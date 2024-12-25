const readFromStorage = (keyOfData="books") => {
    let data
    try{
        data = JSON.parse(localStorage.getItem(keyOfData))
        if(!Array.isArray(data)) throw new Error("is not an array")
    }
    catch(e){
        data = []
    }
    return data
}

const writeToStorage = ( data, keyOfData="books" ) => {
    localStorage.setItem(keyOfData, JSON.stringify(data))
}

//{name: "href", val: "index.html"}
const createMyOwnElement = (parent, el, classes, txt, attr) => {
    const myEle = document.createElement(el)
    parent.appendChild(myEle)
    if(classes) myEle.classList = classes
    if(txt) myEle.innerText = txt
    if(attr) myEle.setAttribute(attr.name, attr.val)
    return myEle
}

const drawBooksTable = () =>{
    const allBooks = readFromStorage()
    allBooks.forEach(book=>{
        const tr = createMyOwnElement(dataWrap, "tr", null, null, null)
        let td = createMyOwnElement(tr, "td", "text-center", book.id, null)
        td = createMyOwnElement(tr, "td", "text-center", book.name, null)
        td = createMyOwnElement(tr, "td", "text-center", book.author, null)
        td = createMyOwnElement(tr, "td", "text-center", book.doa, null)
        td = createMyOwnElement(tr, "td", "text-center", null, null)
        let showBtn = createMyOwnElement(td, "a", "btn btn-primary me-3", "Show", {name:"href", val:"single.html"})
        let EdiBtn = createMyOwnElement(td, "a", "btn btn-warning me-3", "Edit", {name:"href", val:"update.html"})
        let delBtn = createMyOwnElement(td, "button", "btn btn-danger me-3", "Delete", null)
    })
}

const dataWrap= document.querySelector("#dataWrap")
const addData = document.querySelector("#addData")
if(dataWrap) drawBooksTable()

const isEmpty = (formName, formField) => {
    if(!formName[formField].value){
        formName[formField].nextSibling.nextSibling.innerHTML = `<p class='mt-3 alert alert-danger'>${formField} is required</p>`
        return false
    }
    else {
        formName[formField].nextSibling.nextSibling.innerHTML = ``
        return true
    }
}
const checkLength = (formName, formField, len) => {
    if(formName[formField].value.length < len){
        formName[formField].nextSibling.nextSibling.innerHTML += `<p class='mt-3 alert alert-danger'>${formField} must be of chars more than ${len}</p>`
        return false
    }
    else {
        formName[formField].nextSibling.nextSibling.innerHTML = ``
        return true
    }
}
const validateData = (myData) => {
    let isValidName = checkLength(myData, "name",0)
    isValidName = checkLength(myData, "name", 3)
    let isValidAuthor = isEmpty(myData, "author")
    isValidAuthor = checkLength(myData, "author", 3)
    const isValidDoa = isEmpty(myData, "doa")
    return isValidAuthor && isValidName && isValidDoa
}

if(addData){
    addData.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(validateData(addData))
        if(validateData(addData)){
            let book = {
                id: Date.now(),
                name: addData.name.value,
                author: addData.author.value,
                doa: addData.doa.value,
            }
            const allBooks = readFromStorage()
            allBooks.push(book)
            writeToStorage(allBooks)
            window.location.href = "index.html"
        }
    })
}



