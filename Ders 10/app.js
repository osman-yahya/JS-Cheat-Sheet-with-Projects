//! Storage Kullanımı
//* Local ve Session Storage adında iki depolama vardır : 
//TODO Local hep kalır
//TODO Session yenilenene kadardır


sessionStorage.setItem(334,"osman") //storage a değerler number girsen dahi string kaydedilir
sessionStorage.setItem(33,true)

sessionStorage.removeItem(220)

console.log(sessionStorage.getItem(33))
console.log(sessionStorage.getItem(334))
console.log(sessionStorage.getItem(33333)) //değer yoksa null döner

sessionStorage.clear() //tüm session storage ı siler


//Bir arrayi storage a kaydetmek : 

let arrayim = ["Ali" , "Veli" , "Ayşe" , "Fatma"]
//? JSON sınıfıyla bunları stringe çevirip string kaydını da array e çeviricez : 

sessionStorage.setItem("isimler",JSON.stringify(arrayim))

console.log(JSON.parse(sessionStorage.getItem("isimler")))

//!Bu şekilde kaydedip çağırmayı kullanıyoruz.

//! Local storage da aynı , isimler vs her şeyi , sadece pc kapasan bile silinmez!

