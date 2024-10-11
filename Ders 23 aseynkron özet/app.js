//!!! Asenkron yapı özet
/*
*Neler Gördük : 
Callback 
Promise
ASync Await

Xhr
Fetch



*/

function deger1(){
    setTimeout(()=>{
        console.log("1 e girdi")
        return 1
    },2000)
}
function deger2(inet){
    setTimeout(()=>{
        console.log(inet , "2 ye girdi")
    },2000)
}
function deger3(inet){
    setTimeout(()=>{
        console.log(inet , "2 ye girdi")
    },2000)
}
deger3(await(deger2(await deger1())))