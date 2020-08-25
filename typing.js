const displayQuote = document.querySelector('.quote-display')
const displayInput = document.querySelector('.quote-input')
const timer = document.querySelector('.timer')

import data from './data'

const randomQuotes = ['i am here','over and over', 'you are mighty', 'i give my self away']

function getRandomQuotes(){
    const count = Math.floor(Math.random()*data.length)
    return data[count]
}

function getNewQuote(){
    const quote = getRandomQuotes()
    displayQuote.innerText = quote;
}

getNewQuote()
