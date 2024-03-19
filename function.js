let input = document.getElementById('input')
let tododiv = document.getElementById('tododiv')
let todoarr = []

function addtodo() {
todoarr.unshift(input.value)
console.log(todoarr);
     tododiv.innerHTML =''
for (let index = 0; index < todoarr.length; index++) {
if (input.value=="") {
    alert('Enter to keep track for your daily activities')
}else{
    tododiv.innerHTML += `<p id="ptag"> ${todoarr[index]}  <button id="btn1"> <i class="fa-solid fa-trash-can"></i> </button> </p>`
}
}
}
