//TODO : AJAX NEDİR ? :
// AJAX , Browser ve Server Arasındaki Köprüye denir.
//AJAX , bir obje altında yaşar : 

//const xttp = new XMLHttpRequest()
//console.log(xttp)

//! Console'a yazdırıldığında göreceğiz ki bazı property'ler var : 

//? Önemliler . readyState , readyStateChange (bu bir eventtir)
//? responseText , status

//* readyState durumu temsil eder: 
/* 0-İstek Gönderilmedi
1-Server bağlantısı kuruldu
2-İstek sunucu tarafından alındı
3-İstek işleniyor
4-cevap geldi ve hazır. */

//* readyStateChange , readyState'de bir değişimde tetiklenen eventtir.

//* status : İşlemi özetler : 
/* 200 : OK (istek gönderildi veri alındı her şey yolunda)
201 : Veri eklendi
204 : Veri Silindi
400 : Kötü istem (doğrulamadan geçemezse vs.)
401 : yetki dışı istem
429 : çok istek (too many request)
403 : Forbidden Request (Eksik istek)
404 : Sayfa Bulunamadı */

//* responseText : Cevabı almak için kullanırız.

//TODO : fake bir restAPI üzerinden bir örnekle görelim : : : : : : : : :


function prepareURL(url,id){
    if(id == null){
        return url
    }
    else{
        return `${url}?postId=${id}`
    }
}

function getComments(url,id){
    url = prepareURL(url,id)
    console.log(url)
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.status === 200 && xhr.readyState === 4)//Status OK ve veri alındıysa
        console.log(JSON.parse(xhr.responseText))
    })

    xhr.open("GET",url)
    xhr.send()

}

getComments("https://jsonplaceholder.typicode.com/comments",8)

function getUsers(url){
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.status == 200 && xhr.readyState == 4){
        console.log(JSON.parse(xhr.responseText))}
    })
    xhr.open("GET",url)
    xhr.send()
}

getUsers("https://jsonplaceholder.typicode.com/users")
