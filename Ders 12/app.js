//! Arrow Function Kullanımı ÖNEMLİ DERS
//? : değişkeni fonksiyon olarak atamamızı sağlıyor.

const yazdir = ()=> {
    console.log("hello world")
}

const yazdir2 = (firstName)=> {
    console.log("hello ",firstName)
}

//TEK SATIR FONKSİYONLAR İÇİN {} 'e Gerek YOK
//TEK ARGÜMAN İÇİN () 'e Gerek YOK
//TEK SATIR İŞLEM İÇİN RETURN İSTEMEZ

function kupAl1 (x){return x*x*x} 
const kupAl2 = x => x*x*x
//* see, its simplier

const yazdir3 = name => console.log("hEllo ", name)

yazdir3("Osman")

//! Destructing kullanımı

let diller = ["Java" , "C++" , "HTML" , "PhP"]

let lang1, lang2 , lang3 , lang4 
lang1 = diller[0]
lang2 = diller[1]
lang3 = diller[2]
lang4 = diller[3]

//? Bunun yerine

let [dil1 , dil2, dil3 , dil4] = diller

//TODO Yapabiliyoruz.

let OrnekDistructive = (a,b)=>{
    let toplam = a+b
    let cikar = a-b
    let carp = a*b
    let bol = a/b
    return [toplam,cikar,carp,bol]
}

let [arti,eksi,carpi,bolu] = OrnekDistructive(4,5)

console.log(arti,eksi,carpi,bolu)

//! Objjelerle de oluyor, {kullanılacak!} : 

let person = {
    isim : "0sman",
    yas : 20,
    salary : 2000,
}

//! AYNI İSİMLERLE ALABİLİRSİN VEYA ŞU ŞEKİLDE : 

let {isim,yas,salary} = person

console.log(isim,yas,salary)

//*veya

let {isim:name,yas:age,salary:maas} = person

console.log(name,age,maas)



