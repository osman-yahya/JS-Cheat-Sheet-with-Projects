//? : String, Date ve Math Functions

let yazi1 = "Osman Yahya Akıncı , JS'in Baştacı"

console.log(yazi1.charAt(1))

let yazi2 = "Osmanlı 2003'te kurulmadı"

//! Concat Birleştirir
let yazi3 = yazi1.concat(" " , yazi2)

console.log(yazi3)

//! indexOf Arar

console.log(yazi1.indexOf("a")) //? : ilk a yı verdi
console.log(yazi1.lastIndexOf("a")) //? son a yı verdi

//! Trim : baş ve sondaki boş dataları siler : 

let yazi4 = "         Osman Yahya Akıncı       " 

yazi4 = yazi4.trim()

console.log(yazi4)

//! Slice ve Substring : 

yazi4 = yazi1.slice(0,3) //? : 0'dan 3 kez index a
console.log(yazi4)

yazi4 = yazi1.substring(0,3) //? : 0'dan 3 kez index al
console.log(yazi4)

//! Replace : 
console.log(yazi1.replace("Osman","Veli"))

//! Split : verilen karaktere göre ayır , array e dök ve arrayi dön : 

console.log(yazi1.split(" "))

//!  : startswith, endswith : ile mi bitiyo , ile mi başlıyo

console.log(yazi1.startsWith("Os"))
console.log(yazi1.endsWith("cı"))

//******************** Math : 
let sayi1 = 3.4

//! floor , round ve ceil : 

console.log(Math.floor(sayi1) , Math.ceil(sayi1) ,Math.round(sayi1) )


//! max min : arrayin min ve maxını döner

let arraysayi = [1,2,4,2,5,7,8,8,9,2]

console.log(Math.min(1,2,3,4,5)) //! : ARRAY GÖNDEREMEZSİN : 
console.log(Math.min(...arraysayi)) //* : ARRAY GÖNDEREBİLİRSİN : (... : spread operatörü : birden fazla argümanı array ile gönder gibi bi anlamı var)

//! : Math.sqrt() , abs , pow falan zaten

//! : Random : YALNIZCA 0 VE 1 ARASINDA BİR DEĞER VERİR
let randomnumber = Math.random()
console.log(randomnumber)

//? : 5 ile 10 arasında rand bi sayı bulalım : 

for(let i = 0 ; i < 10 ; i++){
    let random = Math.round((Math.random()*10))
    console.log(random)
}

//******************** DATE FUNCTIONS

let tarih = new Date()
console.log(tarih)

console.log(tarih.getDate()) //!  : Tarihteki gün ( Ayın kaçıncı günü )
console.log(tarih.getFullYear())
console.log(tarih.getMilliseconds())
console.log(tarih.getDay()) //! : Haftanın Kaçıncı Günü
console.log(tarih.getMonth()) //! : AYLAR 0'dan BAŞLAR
console.log(tarih.toLocaleDateString())
console.log(tarih.toLocaleTimeString())
console.log(tarih.toLocaleString())

//! : SET METHOTLARI

tarih.setDate(24) //günü 24 e aldık
console.log(tarih.toLocaleString())
tarih.setHours(tarih.getHours() + 2) //TODO : Bu satır saati 2 saat ileri alır
console.log(tarih.toLocaleString())

let tarih2 = new Date(2005,29,1)
console.log(tarih2)