const data = []
const inputs = ["title", "name", "age", "job", "gender", "status"]

const myForm = document.querySelector("form")
const tbody = document.querySelector("tbody")

const createUserObj = (myForm) => {
    const user = { id: Date.now() }
    let formStatus = true
    inputs.forEach( inputData => {
        try{
            if(inputData=="status")
                user[inputData] = myForm[inputData].checked || "false"
            else{
                if(myForm[inputData].value == "") {
                    myForm[inputData].nextSibling.nextSibling.innerHTML=`<p class="alert alert-danger">${inputData} is empty</p>`
                    formStatus = false
                }
                user[inputData] = myForm[inputData].value 
            }
        }
        catch(err){
            user[inputData] = ""
        }
    })

    return {user:user, formStatus:formStatus}
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
}

myForm.addEventListener("submit", function(e){
    e.preventDefault()
    const {user, formStatus} = createUserObj(this)
    if(formStatus){
        drawUser(user)
        // data.push(user)
        this.reset()
    }
})


