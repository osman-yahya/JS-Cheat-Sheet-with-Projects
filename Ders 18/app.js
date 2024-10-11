/*
TODO : JS , SENKRON ÇALIŞAN BİR PROGRAMLAMA DİLİDİR. ÜSTTEN ALTA OKUMA GERÇEKLEŞTİRİLİYOR.

! Asenkron çalıştğı yerler : 
? 1-Timing işlemleri  Örn : settimeout
? 2-Eventler
? 3-HTTPS İstekleri

*/
/*
console.log("İlk Bu Çalışacak")
setTimeout(()=>{
    console.log("En Son Bu Çalışacak")

},3000)
console.log("Sonra Bu Çalışacak")
*/
//! Burda Senkronizasyonun değiştiğini görebiliriz  

//*  bu tarz asenkron yapılarda hangisi ne zaman hazır yönetmek imkansızdır.

//* bu yüzden senkronize etmek için 3 yolumuz var : CALLBACK - PROMISE - ASYNC & AWAIT


const users = [
    {
        userId : 5,
        post : "Osman Post 1"
    },
    {
        userId : 5,
        post : "Osman Post 2"
    },
    {
        userId : 6,
        post : "Yahya Post 1"
    },
    {
        userId : 7,
        post : "Ali Post 1"
    },
    {
        userId : 8,
        post : "Veli Post 1"
    }
]


//user id ile post yakalamamız gerekiyor.

function getUserID(callback){
    setTimeout(()=>{
        //servise gittik ve cevabı aldık 
        
        callback(5)
    },1000)


}

function getPost(userId1){
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId == userId1){
                console.log(user.post)
            }
        })
    },2500)
}

let userIDD = getUserID(getPost)

//! Bu problemi ÇÖZELİM !

//? ÖRN : 

function getname(bekleme){
    setTimeout(() => {
        console.log("osman")
        bekleme()
    }, 10000);
}

function getsurname(bekleme){
    setTimeout(() => {
        console.log("akinci")
    }, 10000);
}

//getname(getsurname)


//Sıralamamız isim soyisim olsa da ilk soyisim yazdırıldı : şimdi callback(en ilkel yol) kullanalım : 
//Bir fonksiyonu, fonksiyona parametre geçerek bekletiriz. oldukça ilkel , fonksiyonun pointerını gönderiyoruz kısaca.
//İçeride arrow function ile fonksiyon ismi göndermeden halledebiliriz. foreach gibi.
/*
!
 getname(()=>{
    setTimeout(() => {
    console.log("akinci")
}, 1000);}) */











