//TODO : SPREAD OPERATÖRÜ (...) : mükemmel operatör
// İki kullanımı var , 

//* 1- array gönderirken

const toplam = (a,b,c,d) => {
    console.log(a+b+c+d)
}

let numbers = [1,2,3,4]

//bir arrayi argümanlara yalnızca spread operatörle dağıtabiliriz,

toplam(...numbers)

//* 2- nested array kullanımını rahatlatır : 

let dizi1 = ["osman", "kemal"]
let dizi2 = ["ayşe","fatma",...dizi1]

console.log(dizi2)

// Veya

dizi3 = [1,2,3,4,5,6,7,8]

let [a, b, ...kalanSayiler] = dizi3

console.log(a,b,kalanSayiler)

//! dizi içine dizi atamada da geçerli

let dizi4 = ["aa", "bb" , "cc", "dd"]
let dizi5 = ["değer kaybolacak"]

dizi5 = [...dizi4]

console.log(dizi5) //! dizi5 = dizi4 yaparsak ikisi aynı arrayi pointler. spread le aynı değerlere sahip 2 farklı array dönüştürmüş oluruz.

//* ve bence en önemlisi : sınırsız argümanlı fonksiyon oluşturulabilir : 

let topla = (...degerler) => {
    let toplam = 0
    degerler.forEach(element => {
        toplam += element
    });
    return toplam
}

console.log("toplam :",topla(1,2,3,4,5,6))

