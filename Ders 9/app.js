const ulpointer = document.querySelector(".container").firstChild.nextSibling.firstChild.nextSibling.querySelectorAll(".card-body")[1].querySelector(".list-group")

const deleteButton = document.querySelector("#todoClearButton");
deleteButton.addEventListener("mousedown",deleteTodos)

const CardPtr = document.querySelectorAll(".card-body")[1] 

CardPtr.addEventListener("mouseenter",changeBody)
CardPtr.addEventListener("mouseleave",changeBody2)

const CardTodo = document.querySelectorAll("#todoName")[0] 


CardTodo.addEventListener("select",deneme)


function deneme(e){
    console.log(e.type)
}

function changeBody(){
        CardPtr.style.backgroundColor = "#e6e6e6"
}

function changeBody2(){
    CardPtr.style.backgroundColor = "white"
}

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

function deleteTodos(e){
    if(confirm("Todo'ları silmek istediğinize emin misiniz?")){
    Array.from(ulpointer.children).forEach(function (element){
        element.remove()
    });}
    console.log(e)
}

/*
! mouse events
click
dbclick
mouseleave
mouseover
DOMContentLoad
load
mouseenter
mouseout

! keyboad events
keypress //harf ve sayılarda tetiklenir
keydown //keypress'le aynı ama her tuşla tetiklenir
keyup // bu da tuştan elini kaldırdığında çalışıyor (klavyeye bastın 
elini çektin çalıştı, inputları sayfaya yazma konusunda bunu kullan!)

! input events
focus : inputa birşey girmek için tıklandığında çalışır
blur : inputa girildikten sonra , çıkıldığında çalışır
copy : inputun içinden herhangi bir şey kopyalandığında çalışır
paste : inputa herhangi bir şey yapıştırıldığında çalışır
cut : inputun içinden herhangi bir şey kesildiğinde çalışır
select : inputun içinden herhangi bir şey seçildiğinde çalışır
*/
