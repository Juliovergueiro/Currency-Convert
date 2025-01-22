const USD = 4.87
const EUR = 5.32
const GBP = 6.98

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulating the input to receiver only numbers
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g

    amount.value = amount.value.replace(hasCharactersRegex, "")

    // amount.value = value is the value that is being put in the input, what's being written on it
    // replace will try to find if the first parameter is written in the sentence. If he finds it, he'll replace it by the second value
    // In hasCharactersRegex case, it may not be a word, but it's like passing a method that will replace anything that the expression refuses (in this case, it refuses alphabet characters)
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
}
}

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol}1 = ${price}`

        let total = amount * price

    if(isNaN(total)) {
        return alert("Por favor, digite o valor corretamente para converter.")
}

        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total
        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

function formatCurrencyBRL(value){

// Has 'locale', 'options'

    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",

// You'll convert the string of 'value' to be an actual Number with the Number method. toLocaleString is a method available to Number, it'll return value as a string and with some details to the text, like putting commas in 2827872928

// toLocaleString: Has 'locale', 'options' as the parameters. In options you have style: 'currency' and currency: country, it'll just style your number with some pre-made methods

})
}