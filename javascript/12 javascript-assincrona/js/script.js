// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const cep = document.querySelector('#cep')
const bairro = document.querySelector('#bairro')
const rua = document.querySelector('#rua')
const cidade = document.querySelector('#cidade')
const uf = document.querySelector('#uf')

cep.addEventListener('change', handleChange)

function handleChange(event) {
  const numberCep = event.target.value
  buscaCep(numberCep)
}

function buscaCep(numberCep) {
  fetch(`https://viacep.com.br/ws/${numberCep}/json/`)
    .then(response => response.json())
    .then(body => {
      bairro.value = body.bairro
      rua.value = body.logradouro
      cidade.value = body.localidade
      uf.value = body.uf
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btc = document.querySelector('#btn')
const brl = document.querySelector('#brl')
const valoresDisplay = document.querySelector('.valores')

btc.addEventListener('keyup', handleChange)

function handleChange(event) {
  const valueBtc = +event.key
  conversor(valueBtc)
}

function conversor(valueBtc) {
  fetch(`https://blockchain.info/ticker`).then(response => response.json()).then(valores => {
    const calculo = valueBtc * valores.BRL.buy
    brl.value = calculo
  })
}

function valorDisplay() {
  fetch(`https://blockchain.info/ticker`)
    .then(response => response.json())
    .then(valores => {
      valoresDisplay.innerText = `1 BTC = ${valores.BRL.buy} BRL`
    })
}

setInterval(valorDisplay, 1000)

valorDisplay()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const resultado = document.querySelector('.piadas p')
const button = document.querySelector('.piadas button')
console.log(resultado.textContent)

button.addEventListener('click', handleClick)

function handleClick() {
  fetch(`https://api.chucknorris.io/jokes/random`).then(response => response.json()).then(piadas => {
    resultado.textContent = piadas.value
  })
}