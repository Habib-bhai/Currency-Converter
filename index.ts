import inquirer from "inquirer"

const currencies: any= {
    USD: 1,
    PKR: 277.70,
    EUR: 0.92,
    INR: 83.29,
    AED: 3.67,
    SAR: 3.75,
    GBP: 0.79
}

const user_input = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter 'From' currency i.e from which you have to know the other ones exchange rate.",
        choices: ["USD","PKR","EUR","INR","AED (Emirati Dirham)","SAR (saudi Riyal)","GBP (pound Sterling)"]
    },
    {
        name:"to",
        type:"list",
        message:"Enter 'To' currency i.e to which you have to convert your current one.",
        choices: ["USD","PKR","EUR","INR","AED (Emirati Dirham)","SAR (saudi Riyal)","GBP (pound Sterling)"] 
    },
    {
        name:"Amount",
        type:"number",
        message:"Enter amount you have"
    }
])

let fromCurrency = currencies[user_input.from]
let toCurrency = currencies[user_input.to]
let Amount = user_input.Amount
let baseCurrency = Amount/fromCurrency
let ConvertedCurrency = baseCurrency * toCurrency 

console.log(`Your converted amount is "${ConvertedCurrency.toFixed()}"`)

