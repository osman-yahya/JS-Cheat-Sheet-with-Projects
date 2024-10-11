const ulpointer = document.querySelector(".container").firstChild.nextSibling.firstChild.nextSibling.querySelectorAll(".card-body")[1].querySelector(".list-group")

//! let istem = prompt("Yeni Todo Giriniz : ")

//! newTodoer(istem,ulpointer)

console.log(ulpointer.childNodes)

function newTodoer(prop,addroute){
    const newTodoli = document.createElement("li")
    const newTodoa = document.createElement("a")
    const newTodoi = document.createElement("i")
    newTodoli.textContent = prop
    newTodoli.className = "list-group-item d-flex justify-content-between"
    newTodoa.className = "delete-item"
    newTodoa.href = "#"
    newTodoi.className = "fa fa-remove"
    newTodoli.appendChild(newTodoa)
    newTodoa.appendChild(newTodoi)
    addroute.appendChild(newTodoli)
}