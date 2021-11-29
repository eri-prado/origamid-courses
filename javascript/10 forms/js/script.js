const contato = document.querySelector('#contato')
const text = document.querySelector('#texto')


function handleChange(event) {
const target = event.target
if(!target.checkValidity()) {
  target.classList.add('invalido')
  // Atribui ao proximo elemento depois do target (span) o valor da mensagem de validação pronta
  target.nextElementSibling.innerText = target.validationMessage
} else {
  target.classList.remove('invalido')
}
}

contato.addEventListener('change', handleChange)