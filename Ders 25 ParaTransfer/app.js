const innerarea = document.querySelector("#inputin")
const outerarea = document.querySelector("#inputout")
const typein = document.querySelector("#in")
const typeout = document.querySelector("#out")

eventListeners()

function eventListeners() {
    innerarea.addEventListener("change", CallF)
    typein.addEventListener("change",CallF)
    typeout.addEventListener("change",CallF)
}

function CallF() {
    if(innerarea.value != 0){
    getCurrency(typein.value,typeout.value,innerarea.value)
        .then((result) => {
            outerarea.value = result
        })
    }
    else{
        outerarea.value = ""
    }
}

async function getCurrency(unitin, unitout, amount) {
    let currencylist = (await (await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gXUBUvDOAro4yintPTdsUlsvq0dOmcGSv8jVdq5N&base_currency=${unitin}`, {
        method: "GET"
    })).json()).data
    return new Promise(async (response, reject) => {
        let result = await currencylist[`${unitout}`] * amount
        response(result)
    })
}



