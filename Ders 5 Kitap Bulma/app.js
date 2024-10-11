let kitaplik = [
    { isim: "Puslu Kıtalar Atlası", konum: [1, 1] , goster : false},
    { isim: "Kürk Mantolu Madonna", konum: [1, 2] , goster : false},
    { isim: "Saatleri Ayarlama Enstitüsü", konum: [1, 3] , goster : false},
    { isim: "Tutunamayanlar", konum: [1, 4] , goster : false},
    { isim: "Masumiyet Müzesi", konum: [1, 5], goster : false },
    { isim: "İnce Memed", konum: [2, 1] , goster : false},
    { isim: "Anayurt Oteli", konum: [2, 2] , goster : false},
    { isim: "Kayıp Zamanın İzinde", konum: [2, 3], goster : false },
    { isim: "Bir Bilim Adamının Romanı", konum: [2, 4] , goster : false},
    { isim: "Saatleri Ayarlama Enstitüsü", konum: [2, 5] , goster : false},
    { isim: "Sinekli Bakkal", konum: [3, 1] , goster : false},
    { isim: "Aşk", konum: [3, 2] , goster : false},
    { isim: "Huzur", konum: [3, 3] , goster : false},
    { isim: "Suç ve Ceza", konum: [3, 4] , goster : false},
    { isim: "İstanbul Hatırası", konum: [3, 5] , goster : false},
    { isim: "Beyoğlu'nun En Güzel Abisi", konum: [4, 1] , goster : false},
    { isim: "O", konum: [4, 2] , goster : false},
    { isim: "Kafamda Bir Tuhaflık", konum: [4, 3], goster : false },
    { isim: "Aganta Burina Burinata", konum: [4, 4] , goster : false},
    { isim: "Kayıp Sembol", konum: [4, 5], goster : false},
    { isim: "Yaban", konum: [5, 1] , goster : false},
    { isim: "Bir Gün Tek Başına", konum: [5, 2], goster : false },
    { isim: "Zeytindağı", konum: [5, 3] , goster : false},
    { isim: "Cevdet Bey ve Oğulları", konum: [5, 4], goster : false },
    { isim: "Tehlikeli Oyunlar", konum: [5, 5], goster : false },
];

//TODO : Kitaplığımız hazır. örnek bir kitaplık sketchle ve 
//TODO : kitaplıktaki arananı bul!

//? : Öncelikle Aranacak Kelimeyi alalım ve arayıcı fonskiyonumuz ile objelerimizi denetleyelim :
printer()
let aranacakKelime = prompt("Kitap İsmini Giriniz")
searcher(aranacakKelime,kitaplik)
printer()

function searcher(word , list){
    list.forEach(function(kitap){
        if(kitap.isim.toUpperCase().includes(aranacakKelime.toUpperCase())){kitap.goster = true}
    });
}

function printer(){
    console.clear()
    for(let i = 0 ; i < 5 ; i++){
        let satir = "|"
        console.log("Satir " + (i+1) + ":")
        for(let j = 0 ; j < 5 ; j++){
            if(kitaplik[i*5 + j].goster == true){
                satir = satir.concat(kitaplik[i*5 + j].isim.slice(0,3).toUpperCase())
            }
            else{
                satir = satir.concat("---")
            }
            satir = satir.concat("|")
        }
        console.log(satir)
    }
}

