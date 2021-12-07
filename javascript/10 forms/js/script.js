const contato = document.querySelector("#contato");
const text = document.querySelector("#texto");
const inputa = document.querySelector("input[type='color']");

function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    // Atribui ao proximo elemento depois do target (span) o valor da mensagem de validação pronta
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove("invalido");
  }
}

function handleKeyUp(event) {
  document.body.style.background = event.target.value;
}

contato.addEventListener("change", handleChange);
inputa.addEventListener("change", handleKeyUp);
