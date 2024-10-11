/* let sayi1 = "Osman";

console.log(sayi1 + " " + typeof sayi1);

let a = 223;
let b = 2.3;
let c = true;
console.log(sayi1.search("a"));

let osman = {
    isim: "Osman",
    soyisim: "Akıncı",
    yas: 19
}

//? Array Tanımı : 

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


function SayiYaz1() {
    console.log(sayilar[1])
}
SayiYaz1();


//? Veya


let sayiyaz2 = function () {
    console.log(sayilar[3])
}

sayiyaz2()

//? We already know this type of shii :: OPERATORS

// same with C language

//use let more than var, var fills RAM storage more

//TODO Just try to get the identation : : : : : : : : : : : : : : : : : : : :

let x = 10;

x %= 3

console.log(x++)


console.log("3" == 3) //! will give true ( == does not considers data type)

console.log(5 === "5") //! will give false === will check data type too
console.log(5 === "5")

*/


//? A Quick Bubble Sort Example

let array = [1, 3, 4, 5, 6, 7, 4, 2, 4, 5, 9, 5, 3, 3, 5, 3, 11, 0]
let uzunluk = array.length
let done = true;
// console.log(array)


while (done) {
    done = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i]
            array[i] = array[i + 1]
            array[i + 1] = temp
            done = true
        }
    }
}
// console.log(array)

//! Logical operators are same with C Language : && : and || : or === : is equal (data type matters) != : is not equal

//--------- Diyalog Kutuları

// : let bool = confirm("Onaylansın mı")  Onayla (true döndürür) - İptal et (false döndürür) sunar
// : alert("Onaylanmasın mı")  Tamam sunar
// : let isim = prompt("Onaylanmamasın mı") prompt , isim i alır.

//! KULLANICIDAN ALINNAN TÜM DEĞERLER STRING TIPINDEDIR.

/*
 ? Vize sonucuyla geçtin geçmedin hesabı örnek kod : 

let yas = Number(prompt("Yaşınız : "))

console.log(yas + typeof yas)

let v1 = Number(prompt("1. Vize Notunu Giriniz :"))
let v2 = Number(prompt("2. Vize Notunu Giriniz :"))
let f = Number(prompt("Final Notunu Giriniz :"))
if(v1*0.3 + v2* 0.3 + f*0.4 > 60){alert("Geçtiniz!")}
else{alert("Kaldınız...")}

*/

//! \n ve \t burda da aynı
//TODO : console.log("osman\nos \t man")




//! ----------------BREAK : DÖNGÜYÜ TAMAMEN KIRAR .... CONTINUE : DÖNGÜYÜ YALNIZCA O SEFERLİK KIRAR : 

/*for(let i = 0 ; i < 10 ; i++){
    if(i === 6){continue}
    console.log(i)

}*/


//? Mükemmel Sayi Bulma Algoritması : 

/*

let sayi = Number(prompt("Mükemmel mi öğrenmek için bir sayı giriniz : "))

function mukemmelMi(sayi){
    let sonuc = 0;
    for(let i = 1 ; i< sayi ; i++){
        if(sayi%i == 0 ){sonuc += i}
    }
    if(sonuc == sayi){return true}
    else{return false}
}

console.log("Sayiniz Mükkemmel mi ? : " + mukemmelMi(sayi)) 

*/

//? Tam sayıyı binary'e çevirme uygulaması

function transformBinary(sayi){
    let maxbit = 1
    while(maxbit <= sayi){maxbit = maxbit*2}
    //* : Şuan sayıdan büyük en küçük 2'nin kuvvetini biliyoruz : Maxbit 
    let cikti = ""

    while(maxbit >= 1){
        if(maxbit <= sayi){
            sayi = sayi - maxbit 
            cikti = cikti.concat("1")}
        else{cikti = cikti.concat("0") }
        maxbit /= 2
    }
    console.log(cikti)
}

transformBinary(12294)



