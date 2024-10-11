//* TANIMLAMALAR  --------------

const todoekle_form = document.querySelector("#todoAddForm")
const todoekle_isim = document.querySelector("#todoName")
const todoekle_card = document.querySelector("#todoeklemekart")

const todolist_card = document.querySelector("#todoList")
const todolist_ul = document.querySelector(".list-group")
const todolist_clearbutton = document.querySelector("#todoClearButton")
const todolist_form = document.querySelector("#todoFilterForm")


/* İtemleri yazdır

console.log(todoekle_form)
console.log(todoekle_isim)
console.log(todolist_ul)
console.log(todoekle_card)
console.log(todolist_clearbutton)
console.log(todolist_form)
console.log(todolist_card)

*/




//* TANIMLAMALAR  --------------
//!------------------------------------------------------------------------------------
//*KODLAR         --------------

LoadTodosFromLocalStorage()
todolist_clearbutton.addEventListener("click",deleteTodos)
todoekle_form.addEventListener("submit",todoEkle)

todolist_form.addEventListener("keyup",filteringTodos)


//*KODLAR         --------------
//!------------------------------------------------------------------------------------
//*FONKSİYONLAR   --------------

function filteringTodos(e){
    let keyword = todolist_form.value
    Array.from(todolist_ul.children).forEach(function(eleman){
        eleman.remove()
    });
    let todosarray = JSON.parse(localStorage.getItem("todos"))
    todosarray.forEach(function (eleman){
        if(eleman.toUpperCase().includes(keyword.toUpperCase())){
            UItodoCreator(eleman)
        }

    })
}

function alertFuncs(i){ //? Alertleri oluşturan fonksiyondur. 1 - silme alerti , 2 - ekleme alerti
    switch (i){
        case 1 :
            let yenidiv = document.createElement("div")
            yenidiv.className = "alert alert-danger mt-2"
            yenidiv.role = "alert"
            yenidiv.textContent = "Tüm Todo'lar Silindi!"
            todolist_card.appendChild(yenidiv)
            setTimeout(function(){
                yenidiv.remove()
            },1500);
            break
        case 2 :
            let yenidiv2 = document.createElement("div")
            yenidiv2.className = "alert alert-success mt-2"
            yenidiv2.role = "alert"
            yenidiv2.textContent = "Todo Eklendi!"
            todoekle_card.appendChild(yenidiv2)
            setTimeout(function(){
                yenidiv2.remove()
            },1000);
            break
        case 3 :
            let yenidiv3 = document.createElement("div")
            yenidiv3.className = "alert alert-warning mt-2"
            yenidiv3.role = "alert"
            yenidiv3.textContent = "Alanı Boş Bırakmayınız"
            todoekle_card.appendChild(yenidiv3)
            setTimeout(function(){
                yenidiv3.remove()
            },1500);
            break
    }


}

function DeleteSingleItem(e){
    e.preventDefault()
    e.target.parentNode.parentNode.remove()
    deleteFromLocalStorage(e.target.parentNode.parentNode.textContent)
}

function todoEkle(e){
    e.preventDefault()
    let todoismi = todoekle_isim.value.trim()
    if(todoismi == null || todoismi == ""){
        alertFuncs(3)
        return
    }
    todoekle_isim.value = ""
    UItodoCreator(todoismi)
    LocalStorageUpdater(todoismi)
    alertFuncs(2)    
}

function LoadTodosFromLocalStorage(){
    if(localStorage.getItem("todos") != null){

        let todoslist = JSON.parse(localStorage.getItem("todos"))
        todoslist.forEach(function(element){
            UItodoCreator(element)
        })
    }
}

function UItodoCreator(isim){  //? Aldığı isim parametresiyle UI'da yeni item oluşturur.
    const yeni_li = document.createElement("li")
    const yeni_a = document.createElement("a")
    const yeni_i =document.createElement("i")
    yeni_li.className= "list-group-item d-flex justify-content-between"
    yeni_li.textContent = isim
    yeni_a.className = "delete-item"
    yeni_a.href = "#"
    yeni_i.className = "fa fa-remove"
    yeni_i.addEventListener("click",DeleteSingleItem)
    yeni_a.appendChild(yeni_i)
    yeni_li.appendChild(yeni_a)
    todolist_ul.appendChild(yeni_li)
}

function LocalStorageUpdater(isim){ //? local storage'a todos günceller , yoksa todos açar.
    if(localStorage.getItem("todos") == null){
        localStorage.setItem("todos",JSON.stringify([]))
    }

    let todosarray = JSON.parse(localStorage.getItem("todos"))
    todosarray.push(isim)
    localStorage.setItem("todos",JSON.stringify(todosarray))
}

function deleteFromLocalStorage(isim){
    let todoslist = JSON.parse(localStorage.getItem("todos"))
    let itemID = todoslist.indexOf(isim)
    todoslist.splice(itemID,1)
    localStorage.setItem("todos",JSON.stringify(todoslist))
}

function deleteTodos(e){ //? UI' daki tüm TODO ları ve Local Storage'ı temizler 0 gönderirsen locali de siler 1 gönderirsen yalnızca UI siler
    e.preventDefault()
    if(confirm("Todo'ları temizlemek istediğinize emin misiniz?")){
        localStorage.clear()
        Array.from(todolist_ul.children).forEach(function(eleman){
            eleman.remove()
        });
        alertFuncs(1)
    }
    
}

//*FONKSİYONLAR   --------------
//!------------------------------------------------------------------------------------
