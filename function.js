let input = document.getElementById('input')
let tododiv = document.getElementById('tododiv')
let todoarr = []

// function addtodo() {
// todoarr.unshift(input.value)
// console.log(todoarr);
//      tododiv.innerHTML =''
// for (let index = 0; index < todoarr.length; index++) {
// if (input.value=="") {
//     alert('Enter to keep track for your daily activities')
// }else{
//     tododiv.innerHTML += `<p id="ptag"> ${todoarr[index]}  <button id="btn1"> <i class="fa-solid fa-trash-can"></i> </button> </p>`
// }
// }
// }

function addtodo(){
    if (input.value == '') {
        alert('Enter to keep track for your daily activities')
    }else{
        todoarr.unshift(input.value)
        disarr()
    }
}
function todelete(index) {
    todoarr. splice(index,1)
    disarr()

}
function toedit(index) {
    let changimg = prompt("Enter the new value")
    todoarr.splice(index,1, changimg);
    console.log(todoarr);
    disarr()


}
function disarr() {
    tododiv.innerHTML =''
    for (let index = 0; index < todoarr.length; index++){
        tododiv.innerHTML += `<p id="ptag"> ${todoarr[index]} 
         <button onclick="todelete(${index})" id="btn1"> <i class="fa-solid fa-trash-can"></i> </button> 
         <button onclick="toedit(${index})" id="btn3"> edit </button>
        </p>`
     }
}
