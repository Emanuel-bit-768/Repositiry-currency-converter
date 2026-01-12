let convertButton = document.querySelector(".convert-button")
let currencySelect = document.querySelector(".currency-select")
let convertSelect = document.querySelector(".convert-select")
let currencyValueToConvert = document.querySelector(".currency-value-to-convert")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor de CIMA
    const currencyValueConverted = document.querySelector(".currency-value")           // Valor de BAIXO

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL").then(response => response.json())

    
    const realToday = 1.0
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high

    
    if (convertSelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (convertSelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (convertSelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (convertSelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (convertSelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue)
    }

    
    let valueInReal = 0
    if (convertSelect.value == "real") valueInReal = inputCurrencyValue
    if (convertSelect.value == "dolar") valueInReal = inputCurrencyValue * dolarToday
    if (convertSelect.value == "euro") valueInReal = inputCurrencyValue * euroToday
    if (convertSelect.value == "libra") valueInReal = inputCurrencyValue * libraToday
    if (convertSelect.value == "bitcoin") valueInReal = inputCurrencyValue * bitcoinToday

    
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(valueInReal / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(valueInReal / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(valueInReal / libraToday)
    }
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(valueInReal)
    }

    
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTX",
            maximumFractionDigits: 5
        }).format(valueInReal / bitcoinToday)
    }

    

}


    function changeCurrency() {
    let currencyDolar = document.getElementById("currency-dolar")
    let currencyImage = document.querySelector(".currency-ban")

    if (currencySelect.value == "dolar") {
        currencyDolar.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyDolar.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyDolar.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "real") {
        currencyDolar.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyDolar.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    let currencyNameFrom = document.getElementById("name-up") 
    let currencyImageFrom = document.getElementById("img-up")

    if (convertSelect.value == "real") {
        currencyNameFrom.innerHTML = "Real Brasileiro"
        currencyImageFrom.src = "./assets/real.png"
    }
    if (convertSelect.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar Americano"
        currencyImageFrom.src = "./assets/dolar.png"
    }

    if (convertSelect.value == "euro") {
        currencyNameFrom.innerHTML = "euro"
        currencyImageFrom.src = "./assets/euro.png"
    }

    if (convertSelect.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImageFrom.src = "./assets/libra.png"
    }

    if (convertSelect.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImageFrom.src = "./assets/bitcoin.png"
    }
    

    

    convertValues()

}



currencySelect.addEventListener("change", changeCurrency)
convertSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)