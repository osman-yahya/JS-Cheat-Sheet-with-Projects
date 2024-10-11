//! Let's Cook

const formwrapper = document.querySelector("#formWrapper")
const form = document.querySelector(".form")
const input = document.querySelector("#input")
const imagelist = document.querySelector("#contents")
const buttonwrapper = document.querySelector("#buttonwrapper")
const clearButton = document.querySelector("#clear")
const submitButton = document.querySelector("#submit")
const morebuttoncontainer = document.querySelector("#more-button-container")
const nawbar = document.querySelector(".nav")
/*
!Contents : : : : : : : 
* Form Wrapper Div : formwrapper
* Form : form
* Input area : input
* Image Holder Div : imagelist
* Button Wrapper Div : buttonwrapper
* Clear Button : clearButton
* Submit Button : submitButton
*/
allEvents()

let page = 1;
let imageArray = [];
function allEvents(){
    form.addEventListener("submit",search)
    clearButton.addEventListener("click",clearItems)
    nawbar.addEventListener("mouseenter", () => {
        const h1 = nawbar.querySelector("h1");
        h1.innerHTML = "Powered by Osman";
        h1.classList.add("transition");
    });

    nawbar.addEventListener("mouseleave", () => {
        const h1 = nawbar.querySelector("h1");
        h1.innerHTML = "Welcome to ImageSearcher";

        h1.classList.remove("transition");
    });
    
}

async function search(e){
    e.preventDefault()
    await clearItems()
    let keyword = input.value.trim()
    let result = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword.split(" ").join("_")}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID RciwqBt1tQEYYhzMma8gYOgqyLK0BHvgdAKk6kQx-kc"
        }
    })
    let resultobj = await result.json()
    resultobj.results.forEach((element) => {
        let imagebox = new onePhoto(element.urls.small,element.links.download)
        imagebox.createImage()
        imageArray.push(imagebox)
        console.log(imageArray)
    });
    if(morebuttoncontainer.children.length == 0){
    let moreButton = document.createElement("button")
    moreButton.className = "button more-button"
    moreButton.innerHTML = "Daha Fazla"
    morebuttoncontainer.appendChild(moreButton)
    moreButton.addEventListener("click",search)
    }
    page += 1
    /*
    <button type="submit" id="submit" class="button submit-button">Ara!</button>
    */
}

class onePhoto{
    constructor(url,download){
        this.url = url
        this.download = download
    }
    createImage(){
        let a = document.createElement("a")
        a.href = this.download
        a.target = "blank"
        a.className = "created"

        let div = document.createElement("div")
        div.className = "created"
        div.style.width = "30%"
        div.style.height = "250px"
        div.style.borderRadius = "20px"
        div.style.margin = "10px"
        div.style.display = "inline-block"
        div.style.backgroundImage = `url("${this.url}")`
        div.style.backgroundSize = "100% 100%"
        div.style.backgroundPosition = "center"
        div.style.border = "2px solid black"

        
        a.appendChild(div)
        imagelist.appendChild(a)
        this.element = a
    }
    deleteItself(){
        this.element.remove()
    }
    
}

function clearItems(){
    return new Promise((response)=>{
        if(imageArray.length != 0){
        imageArray.forEach((element)=>{
            element.deleteItself()
        })
        let page = 1;
        imageArray = []
        morebuttoncontainer.firstChild.remove()
        }
        response()
    })
    
}
