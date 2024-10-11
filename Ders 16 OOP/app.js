//! OBJE TABANLI PROGRAMLAMA

// TODO : Bir insan oluşturalım : 

class Insan{
    /* 
    !- Bir Class'ta 3 şey bulunur : 
    *-Constructor
    *-Özellikler
    *-Fonksiyonlar
    */
    constructor(isim,soyisim,yas,maas){ //*Yapıcı Metot, yeni bir Insan oluştururken new ile , constructor method oluşturulur.

        //! Burada 'this' anahtar kelimesi öne çıkar: şuanki sınıfı temsil eder.
        //? aşağıdakiler özellikleri temsil eder.
        this.isim1 = isim
        this.soyisim1 = soyisim
        this.yas1 = yas
        this.maas1 = maas

    }
     
    //TODO Burdan aşağısı da fonsksiyonları yazarız : 
    bilgileriGoster(){
        console.log(`İsim : ${this.isim1} Soyisim : ${this.soyisim1} Yas : ${this.yas1} Maas : ${this.maas1}`)
    }


}

const insan1 = new Insan("osman","akinci",19,200000); //? Sınıftan nesneyi new ile oluştururuz.
const insan2 = new Insan("yahya","akkkıncı",20,2000000)
insan1.bilgileriGoster()
insan2.bilgileriGoster()

console.log(insan1.isim1, insan1.isim) //! parametre aktarımındaki değişkenler tutulmaz.

//! STATIC KULLANIMI

class Matematik {

    topla(a,b){
        console.log(a+b)
    }
    cikar(a,b){
        console.log(a-b)
    }
    carp(a,b){
        console.log(a*b)
    }
    bol(a,b){
        console.log(a/b)
    }
}

//JS'deki Math()'da bir class : 

const matematik = new Matematik();

//! constructor ile bir işimiz yok.

matematik.topla(10,5)

//Aynı şunun gibi
//* Math.pow(2,3)

//! Biz Matematik.topla kullanmak için let matematik = new Matematik yapmak
//! zorundaydık ama eğer bir fonksiyonu static tanımlarsanız. Class üzerinden
//! erişebilirsiniz. Aynı Math.blablabla gibi... static fonksyionları class ile erişiriz. static olmayanları
//! ise yalnızca class'tan nesne oluştururken kullanabiliriz. Static ile değişken de oluşturabiliriz.

class Matematik2 {
    static piNumber = 3.14

    static topla(a,b){
        console.log(a+b)
    }
    static cikar(a,b){
        console.log(a-b)
    }
    static carp(a,b){
        console.log(a*b)
    }
    static bol(a,b){
        console.log(a/b)
    }
}

Matematik2.carp(3,6) 

console.log(Matematik2.piNumber)

//! Statik değişkenlere nesne üzerinden ulaşılamaz!

//!!!!!!!! ----- Inheritance - Miras :  :  :  :  :  :  :  :  :  :  :  ÖNEMLİ  :  :  :  :  :  :  :  

//* Örneğin bir String Utils kullanacaksak : alan boş mu alan string mi tarzı. bunları bir class'ta kullanırız: 
//* Bu sayede bir kez strignUtils oluşturur, diğer class'larda kullanırız.


class Person {
    firstname = "Osman ( Inheritance )"

    write(){
        console.log(this.firstname)
    }
}

const person1 = new Person()
person1.write()

class Ogrenci extends Person { //! Person sınıfını miras olarak aldık.
    write(){ //! Aynı isimde miras varsa bu ana fonksiyon olur. super.write kullanırsak üst sınıftaki olur ! 
        console.log("Person sınıfından gelen özellik : ", this.firstname)
    }
}

let student = new Ogrenci()

student.write()


//! ------------------ this , super ve super() kullanımı :  :  :  :  :  :  :  :  :  :  :  :  :  :  :  :  

/*
TODO : This anahtar kelimesi aslında bir objedir. kendi sınıfındaki tüm değerleri tutar :

*/

class Kisi {
    firstname = "Osman Kisi Class'taki"
    write(){
        console.log(this.firstname)
    }
}

let kisi1 = new Kisi()
kisi1.write()

//! : direkt en dışa console.log(this) yazarsak window objesi console ' a yazdırılır.

class Worker extends Kisi {
    write(){
        super.write()
    }
}

console.log("---------")

let worker1 = new Worker
worker1.write()


//? Asıl olay super()' de : 

class Isci {
    constructor(isim,soyisim,maas){
        this.isim = isim
        this.soyisim = soyisim
        this.maas = maas
    }
    writeInfo(){
        console.log(this.isim , this.soyisim , this.maas)
    }
}

class Engineer extends Isci{
    constructor(isim,soyisim,maas){
        super(isim,soyisim,maas) //! Üst Class'taki constructor ' ı alırız.
    }
    write(){
        super.writeInfo() // başka write info olmadığı için super. 'siz de kullanabiliriz :  :  :
    }
}

console.log("---------")


let muhOsman = new Engineer("Osman" , "Akinci" , 200000)
muhOsman.writeInfo()
muhOsman.write()
console.log(muhOsman.isim)