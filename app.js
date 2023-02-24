console.log('ffd')
let arr =[]

function delid(i) {
    delete arr[i]
    render()
}

let editindex = 0
let isEditing = false

function render() {
    let tag = document.getElementById("list")
    let str = ''
    for( i in arr) {
        if(i == editindex && isEditing){
        str = str + `<li class = "listel">  <input id="edit" value= '${arr[i]}'></input> <button onclick = "edit(${i})">done</button> <button onclick = "delid(${i})">delete</button>  </li>`
        console.log(str)
        }else{
            str = str + `<li class = "listel">  ${arr[i]} <button onclick = "edit(${i})">edit</button> <button onclick = "delid(${i})">delete</button> </li>`
        }
    } 
    tag.innerHTML = str
}

function edit(i) {
    console.log("EDIT")
    if(isEditing){
        arr[i] = document.getElementById('edit').value
        isEditing = false
    }else{
        isEditing= true
        editindex = i
    }

    render()

}


function buttonClick() {
    let val = document.getElementById("input").value
    if(val != ""){
    arr.push(val)
    }else {
        alert("Input a value")
    }
    document.getElementById("input").value = ''
    render()

}
