//? For in - for of kullanımı

let isimler = ["osman" , "yahya", "ahmet", "mehmet"]

//* for in döngüsü : 

for(let name in isimler){
    console.log(name)
} //! bu index numaralarını verir.

//? Şu şekilde işe yarayabilir : 
for(let name in isimler){
    console.log(name , isimler[name])
} 

for(let name of isimler){
    console.log(name)
} //! bu değeri verir numaralarını verir.

//? Şu şekilde işe yarayabilir : 
for(let name of isimler){
    console.log(name , isimler.indexOf(name))
} 

//!!!!!!!!!!!!!! Map'ler : 

//* Map'ler bir dizi türüdür her değer atanabilir : 

const map1 = new Map()

map1.set("kod1 " , 12)
map1.set([1,2,3,4] , true)

//! : key - value olarak kaydeder.

const map2 = new Map()

map2.set(34 , "ist")
map2.set(6 , "ankara")
map2.set(35 , "izmir")
map2.set(1 , "adana")

console.log(map2.get(6)) //session storage gibi , bence burda fonksiyon saklanabilir.

console.log(map2.size) //boyutuna bakabiliriz.

console.log(map2.delete(34)) //!silebilirse bool döner : 

console.log(map2.has(34)) //! şu keydeki değere sahip mi?


//! for of ile map içinde dönebiliriz.
for(let [key,value] of map2){
    console.log(key, value)
}

let keyler = Array.from(map2.keys())
console.log(keyler)

let degerlerr = Array.from(map2.values())
console.log(degerlerr)

//? MAP'ten Array e çevirme : 

let mapToArray = Array.from(map2)
console.log(mapToArray) //2 dimensional bir array verir.

//* veya arrayi map e çevirebiliriz : 

const arraydenmape = new Map(mapToArray)

console.log(arraydenmape)

//!      SET : map le aynı. sadece bir değeri bir kez kullanabiliriz : 

let set = new Set()
set.add(true)
set.add("Osman")
set.add([1,2,3])
set.add({username : "Osman" , pass:"123456"})
console.log(set)
set.add("Osman")
console.log(set) //? Set 'de aynı değer sadece 1 kez barınır.
console.log(set.delete("osman")) //silerken bool verir.
set.delete([1,2,3]) //! YAPILMAZ : Referans tipleri set ve maplerde aratılmaz. bir değişkene atayıp set ve mape kaydedip , o referans ile silebilirsiniz.

for(let value of set){
    console.log(value)
}

//Arrayden set veya setten array map ile aynı :
let array = [1,true,"osman",[1,2,3],true]

let newset = new Set(array)
console.log(newset) //? : iki kez olan değerler bir kez kaydedilir.

