/* console.log("Baba Online")
let isimler = ["Osman","Ahmet","Yahya","Mehmet"]
console.log(isimler[0] , isimler.length)
console.log("--------------------")
//foreach -> dizilerde kullanılan döngüdür : 

isimler.forEach(function(isim){
    console.log(isim)
    ? : foreach döngüsü içine isimsiz bir fucntion ve içine parametresini koyuyoruz. sonra fonksiyonu
    ? : yazıyoruz ve foreach bize arrayin tüm elemanları için bu fonksiyonu gerçekleştiriyor.

}); */

let arabalar = ["bmw", "porche ", "audi" , "lambo" , "merco"]

let arabalar2 = ["hyundai" , "aston martin"]


console.log(arabalar)

arabalar.splice(2,0,"hyundai") //! : 2 : start index | 0 : silme countu (kaç silme yapılacak) | "hyundai" : oraya yundai ekle

console.log(arabalar.join("-")) //TODO .toString araya virgül koyar, join istediğimizi koyar

let birlesikdizi = arabalar.concat(arabalar2)

console.log(birlesikdizi)

let ayridizi = arabalar.slice(2,4)

console.log(ayridizi)

console.log(arabalar.length)

arabalar.reverse()

console.log(arabalar)

let isimler = "osman,ali,veli"

//* SPLIT EFSANE FONKSİYON ::

let isimlerArrayi = isimler.split(",");

console.log(isimlerArrayi)

console.log(isimlerArrayi.indexOf("mehmet")) // bulamazsa -1 döner

console.log(isimlerArrayi.includes("osman") , isimlerArrayi.includes("mehmet") )
