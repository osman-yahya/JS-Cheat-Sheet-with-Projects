const ucretAlani = document.querySelector("p")


const tutarAlani = document.querySelector("#tutar")


const divAlani = document.querySelector("#kartBilgileri")


const kartVarMi = document.querySelector("select")


const kartBilgi = document.createElement("form")
const kartBilgiIsim = document.createElement("input")
const kartBilgiSoy = document.createElement("input")
const kartBilgiSubmit = document.createElement("input")

kartBilgiIsim.type = "text"
kartBilgiSoy.type = "text"
kartBilgiSubmit.type = "submit"

kartBilgiIsim.placeholder = "İsim Girin"
kartBilgiSoy.placeholder = "Soyisim Girin"
kartBilgiSubmit.value = "Ara!"

kartBilgi.appendChild(kartBilgiIsim)
kartBilgi.appendChild(kartBilgiSoy)
kartBilgi.appendChild(kartBilgiSubmit)



kartVarMi.addEventListener("change",appendKart)

kartBilgi.addEventListener("submit",bilgiAra)


function appendKart(){
    if(kartVarMi.value == 1){
        divAlani.appendChild(kartBilgi)
    }
    if(kartVarMi.value == 0){
        Array.from(divAlani.children).forEach((element) =>{
            element.remove()
        })
        }
}


function bilgiAra(e){
    e.preventDefault()
    let isim = kartBilgiIsim.value
    let soyisim = kartBilgiSoy.value
    let tutar = tutarAlani.value
    let musteri = new Musteri(isim,soyisim,tutar)
    console.log(musteri)
    ucretYazdir(musteri)
}





tutarAlani.addEventListener("input", ucretYazdir)

function ucretYazdir(musteri){
    if(kartVarMi.value == 1){
        console.log("geld")
        if(tutarAlani.value == "" || ucretAlani.textContent == null){
            ucretAlani.textContent = "Ücret Girilmedi"
        }
        else{
            ucretAlani.textContent = `${musteri.tutarGuncelle(tutarAlani.value)} TL - İndirim Uygulandı`
            
        }
    }
    else{
        if(tutarAlani.value == "" || ucretAlani.textContent == null){
            ucretAlani.textContent = "Ücret Girilmedi"
        }
        else{
            ucretAlani.textContent = `${tutarAlani.value} TL`
        }
    }
}

//TODO : İndirim oranı müşteri varsa 0.7 olsun yoksa 1 , müşteri bulunursa alert versin.


class MigrosBase{
    indirimOrani = 0.7
    constructor(isim,soyisim,tutar){
        this.isim = isim
        this.soyisim = soyisim
        this.tutar = tutar
    }

    hesapla(){
        return this.tutar * this.indirimOrani
    }

    
}

class Musteri extends MigrosBase{

    constructor(isim,soyisim,tutar){
        super(isim,soyisim,tutar)
    }

    tutarGuncelle(newTutar){
        this.tutar = newTutar * this.indirimOrani
        return this.tutar
    }
}



