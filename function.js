let input = document.getElementById('input')
let tododiv = document.getElementById('tododiv')
let todoarr = JSON.parse(localStorage.getItem("todolist")) || []


function addtodo() {
    if (input.value == '') {
        alert('Enter to keep track for your daily activities')
        return
    } else {
        todoarr.push(input.value);
        localStorage.setItem("todolist", JSON.stringify(todoarr))
        disarr()
    }
}
function todelete(index) {
    todoarr.splice(index, 1)
    disarr()

}
function toedit(index) {
    let changimg = prompt("Enter the new list")
    todoarr.splice(index, 1, changimg);
    console.log(todoarr);
    disarr()


}
function disarr() {
    tododiv.innerHTML = ''
    for (let index = 0; index < todoarr.length; index++) {
        tododiv.innerHTML += `
        <p id="ptag"> ${todoarr[index]} 
        <span id="babb"> 
        <button onclick="todelete(${index})" id="btn1"> <i class="fa-solid fa-trash-can"></i> </button> 
        <button onclick="toedit(${index})" id="btn3"> edit </button>
        </span>
        </p>`
    }
}
