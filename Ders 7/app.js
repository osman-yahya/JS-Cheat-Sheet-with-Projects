//? SELECTORS ************* document içindeki itemleri seçmek için document.querySelector("İÇİNE İD(#) veya CLASS(.)") ile veya getElementBy... ile seçeriz
//? CLASS birden fazla kez kullanıldıysa querySelectorAll kullanmalısın CSS Selector yazıyoruz queryS içine
const value2 = document.querySelectorAll("li:nth-child(odd)")

const ValueArrayi = Array.from(value2)

ValueArrayi.forEach(function(deger){
    deger.style.backgroundColor = "lightgrey"
})



//! Style kullanarak oynama

const button = document.getElementById("todoAddButton")

button.style.fontWeight = "bold"

button.style.backgroundColor = "green"

button.style.borderRadius = "20px"


const listItem = document.querySelectorAll(".list-group-item")[0]

listItem.style.marginTop = "20px"


//! Parent Child arasında seçicilerle gezme : 

const todolist =  document.querySelector(".list-group"); //TODO : UL yi seçtik

const todo = document.querySelector(".list-group-item"); //TODO : UL içindeli Lİ leri seçtik

const card = document.querySelector(".card"); //TODO : UL nin de içinde olduğu CARD ı seçtik


//* Anneden Çocuklara Erişmek

let value
value = todolist.children //? Örneğin ul içindeki son 'li' ye erişebiliyoruz.

//console.log(value)

//* Çocuktan Anneye Erişmek

value = todo.parentElement.parentElement.firstChild

//* Kardeşten kardeşe

value = todo.nextElementSibling.previousElementSibling.nextElementSibling
//console.log(value)

const row = document.querySelector(".row")
deger = row.children[0].children[3].children[0]
deger.textContent = "Todo Listesi Değişti"
console.log(deger)