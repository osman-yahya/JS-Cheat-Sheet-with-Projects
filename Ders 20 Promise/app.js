// Promise'ler , callbackler için daha iyi bir alternatiftir.
/*
promise'lerin 3 modu vardır.
* bir istek atınca BEKLEME moduna geçer : pending
* bir işlem başarıyla tamamlanırsa : fulfilled / resolved
* bir işlem tamamlanamadıyas : rejected

? promise'lerin önemli fonksiyonları vardır.
? then ve catch

TODO : olumlu sonuç then ile yakalanır.
TODO : başarısız işlem catch ile yakalanır

*/

//! Promise yapısı içerisine bir parametre alır : 
//! Bu parametre, iki argümanlı bir arrow function'dur.

/*
!Bu örnek bir promise yapısıdır : 
let check = true / false

const promise1 = new Promise((resolved,rejected)=>{
    if(check){
        resolved("Promise Başarılı")
    }
    else{
        rejected("Promise Başarısız.")
    }

})

console.log(promise1)
 */


let check = false 
function createPromise(){
    return new Promise((resolved,rejected)=>{
        if(check){
            resolved("Promise Başarılı")
        }
        else{
            rejected("Promise Başarısız.")
        }
    
    })
}

//* Elimizde bir promise oluşturan fonksiyon var. oluşturduğumuz bu promise check değişkenine
//* bağlı olarak resolved veya rejected dönecek. Döndüğü değerleri yakalamak için then ve catch kullanacağız : 
//* then ve catch 'de içerisine bir arrow function alır ve fulfilled veya rejected durumlarında bunu çalıştırır
//? Kullanım biraz farklı : 

createPromise()
.then((response)=>{
    console.log(response)
})
    

.catch((error)=>{
    console.log(error)
})

.finally(()=>{ //TODO : Finally , reject veya resolved durumlarının ikisinde de çalışır
    console.log("Her zaman çalışır")
})

//TODO : Örnek bir asenkron yapı oluşturalım : Promise ve XHR : 
 
function readKisiler(url){
    return new Promise((resolved , rejected)=>{
        const xhr = new XMLHttpRequest()
        xhr.addEventListener("readystatechange",()=>{
            
            try{ if(xhr.readyState == 4 && xhr.status == 200){
                resolved(JSON.parse(xhr.responseText))
            }}
            catch(error){
                rejected(error)
            }
        })
        xhr.open("GET",url)
        xhr.send()
    })
}

/* readKisiler("/Kisiler.json")
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
}) */


//? : try catch çok eski konu : try içerisine kod yazılır, hata alınırsa catch çalışır (hata error parametresiyle cathc e devredilir.)
//? try içerisinde kendimiz hata oluşturabiliriz. bunun için :  throw "Eror Çıktı"
/* 
TODO : TRY CATCH THROW örneği
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript try catch</h2>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try { 
    if(x.trim() == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
    finally{
        console.log("kodlar çalıştı")
    }
}
</script>

</body>
</html>
*/

//TODO : userları promise ile çek : 

function getDataFromURL(url){
    return new Promise((resolved,rejected)=>{
        const xhr = new XMLHttpRequest()
        try{
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.status == 200 && xhr.readyState == 4){
                    resolved(JSON.parse(xhr.responseText))
                }
            })
        }
        catch(error){
            console.log("TRY SIRASINDA HATA OLUŞTU")
            rejected(error)
        }
        xhr.open("GET",url)
        xhr.send()
    })
}

getDataFromURL("https://jsonplaceholder.typicode.com/users/3")
.then((kisi)=>{
    console.log(kisi)
    //! ! ! ! Burdan sonra daha farklı asenkron problemleri çalıştırabiliriz... örneğin id üzerinden comment alalım : 
    return getDataFromURL(`https://jsonplaceholder.typicode.com/comments/${kisi.id}`)
})//return ile en dıştaki .then yapısı , getdatafromURL 'nin döndürdüğü promise'i temsil eder.
.then((data)=>console.log(data))

.catch((error)=>{
    console.log(error)
})
.finally(()=>{console.log("Her zaman çalışır.")})

//? Promise all kullanımı : 


const p1 = Promise.resolve("birinci promise başarılı")
const p2 = Promise.resolve("ikinci promise başarılı")
const p3 = new Promise((resolve,reject)=>{
    resolve("üçüncü promise başarılı")
})

Promise.all([p1,p2,p3])
.then((res)=>{
    res.forEach((elm)=>{
        console.log(elm)
    })
})//? Promise.all , array olarak verilen promiselerin hepsi resolve ise then e girer
//?   bir tane bile rejected varsa catch e girer, parametre olarak bir array döner
//?   bu array promiselerin ayrı ayrı sonuçlarını temsil eder.