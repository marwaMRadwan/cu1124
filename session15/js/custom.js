const data = []
const inputs = ["title", "name", "age", "job"]
const myForm = document.querySelector("form")
const tbody = document.querySelector("tbody")
const createUserObj = (myForm) => {
    const user = { id: Date.now() }
    inputs.forEach( inputData => {
        try{
            user[inputData] = myForm[inputData].value 
        }
        catch(err){
            user[inputData] = ""
        }
    })
    return user
}

const createMyOwnEle = (parent, ele, txt=null) => {
    let myEle = document.createElement(ele)
    parent.appendChild(myEle)
    if(txt) myEle.innerHTML = txt
    return myEle
}
const drawUser = (obj) => {
    const row = createMyOwnEle(tbody, "tr")
    createMyOwnEle( row, "td", obj.id)
    inputs.forEach(inp => createMyOwnEle( row, "td", obj[inp]))
    // createMyOwnEle( row, "td", obj.title)
    // createMyOwnEle( row, "td", obj.name)
    // createMyOwnEle( row, "td", obj.age)
    // createMyOwnEle( row, "td", obj.job)
}

myForm.addEventListener("submit", function(e){
    e.preventDefault()
    const user = createUserObj(myForm)
    drawUser(user)
    data.push(user)
    this.reset()
})


