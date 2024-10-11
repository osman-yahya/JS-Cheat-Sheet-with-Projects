//ASYNC AWAIT  : promise then then işlerinden kurtarır.

// bir fonksiyonun promise döndürmesine olanak tanır :

function hello1() {
    return "hello world1"
}
console.log(hello1())

//ASYNC LEYELİM : 

async function hello() {
    return "hello world"
}

hello()
.then((data)=>console.log(data))


//ÖRNEK : post çek post yorumları çek : 


//TODO : document.querySelector("#button").addEventListener("click",getElements)

function getElements(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((responseProm)=>responseProm.json())
    .then((data)=>{
        console.log(data)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
        .then((responseProm)=>responseProm.json())
        .then((data)=>{
            console.log(data)
        })
    })
}
//* Bu eşşek yüküyle uğraşmaktansa async await yapısı kullanırız.

//!!!!!!! AWAIT yalnızca ASYNC Fonksiyonlarda kullanılır.

document.querySelector("#button").addEventListener("click",async ()=>{
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1") //! bu asenkron yapıyı beklemek için await kullanırız!
    const post = await responsePost.json() //Bu bir promise olduğu için await kullanmak zorundayız.
    console.log(post)
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comment = await responseComments.json()
    console.log(comment)
})
//DAHA DA KISALTALIM : 
document.querySelector("#button").addEventListener("click",async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json() //! bu asenkron yapıyı beklemek için await kullanırız!
    console.log(post)
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(comments)
})

/*
TODO: then aslında iş bitene kadar bekle , bitince sonucu yazdır diyordu.
await o beklemeyi yapıyor ve direkt sonucu dönüyor. 




*/
