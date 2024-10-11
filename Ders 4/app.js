let urun1 = {
    isim : "ACER Laptop1" ,
    kategori : "Laptop" ,
    fiyat : 6219
}

let urun2 = {
    isim : "ACER Laptop2" ,
    kategori : "Laptop" ,
    fiyat : 7144
}

let urun3 = {
    isim : "ACER Laptop3" ,
    kategori : "Laptop" ,
    fiyat : 9920
}

let urun4 = {
    isim : "LENOVO Laptop1" ,
    kategori : "Laptop" ,
    fiyat : 3340
}

let urun5 = {
    isim : "LENOVO Laptop2" ,
    kategori : "Laptop" ,
    fiyat : 6559
}

let urun6 = {
    isim : "LENOVO Laptop3" ,
    kategori : "Laptop" ,
    fiyat : 7899
}

//! Altı adet ürünümüz var

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6]

let secilenler = []

let isim = prompt("Ürün adı giriniz")

function filtrele (){urunler.forEach(function(urun){
    if(urun.isim.toUpperCase().includes(isim.toUpperCase())){
        secilenler.push(urun)
    }
})
}

filtrele()

console.log(secilenler)

secilenler.forEach(function (dongu){
    console.log(dongu)
});

