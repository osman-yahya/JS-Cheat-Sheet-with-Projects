//TODO ------- FETCH API -------- 
//XMLHTTPREQUEST' e alternatiftir.
//callback yerine -> promise,
//ajax(xhr) yerine -> fetch api

//* fetch("istek url") fetch bizd bir promise döner,

function getPersons(url){
    fetch("/Kisiler.json")
    .then((responsePromise)=>{  
        return responsePromise.json()
    })
    .then((data)=>console.log(data))
}   

getPersons("/Kisiler.json")

//fetch bize bir promise döner, bu promise response promise'dir.
//fetch -> response promise -> asıl istenen data iç içe gelir. bunu 2 then kullanarak çıkarırız : 

//! : tek satırlık arrow function , void değilse başta return varmış gibi davranır !!!!!!!! : 
//* bu yüzden şu da temiz ve doğru bir kullanımdır : 

function getPersons2(url){
    fetch("/Kisiler.json")
    .then((responsePromise)=>responsePromise.json()) //response.json ile içerdeki dataya sahip promise i çıkarır ve returnler
    .then((data)=>console.log(data))
}   

function getData(url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users")


function getData(url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}