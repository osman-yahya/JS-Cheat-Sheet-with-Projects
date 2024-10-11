//!----- TEMPLATE LITERALS

function consolayaz(isim,soyisim){
    console.log("İsim : " + isim + " | " + "Soyisim : " + soyisim )
}
//TODO : bu kadar boşluk bilmemne kullanmak için '+' kullanmak yerine:

consolayaz2("osman" , "yahya")

//TODO : Template literals , placeholder mantığı ile çalışıyor : 

function consolayaz2(isim,soyisim){
    console.log(`İsim : ${isim} | Soyisim : ${soyisim}`) //! YATIK TEK TIRNAK ( option + noktalı virgül)
}

//? VE : 

function consolayaz2(isim,soyisim){
    console.log(`
İsim : ${isim} 
Soyisim : ${soyisim}
`) //! Space , enter ların hepsini algılar !
}