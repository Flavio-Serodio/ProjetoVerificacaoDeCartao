const inputName =  document.getElementById("CardholderName")
const inputNumber = document.getElementById("inputCardNumber")
const inputMM = document.getElementById("MM")
const inputYY = document.getElementById("YY")
const inputCVC = document.getElementById("CVC")
const cardNumber = document.querySelector(".cardNumber")
const cardName = document.querySelector(".nameFront")
const cardDateMM = document.querySelector(".dataFrontMM")
const cardDateYY = document.querySelector(".dataFrontYY")
const cardCVC = document.querySelector(".CVC-image")

function updateCard(input,element,defaltValue){
    element.textContent = input.value || defaltValue
}

function updateCardNumber(input, element, defaltValue){
    input.addEventListener("input",() => {
        input.value = input.value.replace(/\D/g, "")
        element.textContent = input.value || defaltValue;
    })
}


updateCard(inputName, cardName, "Jane Appleseed");
updateCardNumber(inputMM, cardDateMM, "00");
updateCardNumber(inputYY, cardDateYY, "00");
updateCardNumber(inputCVC, cardCVC, "000")

inputNumber.addEventListener("input", function () {

  // Remove tudo que não for número
  let value = inputNumber.value.replace(/\D/g, "")

  // Limita a 16 números
  value = value.slice(0, 16)

  // Adiciona espaço a cada 4 números
  value = value.replace(/(\d{4})(?=\d)/g, "$1 ")

  inputNumber.value = value
    cardNumber.textContent = value || "0000 0000 0000 0000"
  
})
