let billInput = document.querySelector(".bill__input");
let numberOfPersonInput = document.querySelector(".people__input");
let errorPeople = document.querySelector(".error__people");

billInput.addEventListener("input", onlyNumbers);
numberOfPersonInput.addEventListener("input", onlyNumbers);

function onlyNumbers() {
  tipsPercentages();

  billInput.value = billInput.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");

  numberOfPersonInput.value = numberOfPersonInput.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");

  if (numberOfPersonInput.value == 0 || numberOfPersonInput.value == "") {
    numberOfPersonInput.classList.add("emptyInput");
    errorPeople.classList.add("show__message");
  } else {
    numberOfPersonInput.classList.remove("emptyInput");
    errorPeople.classList.remove("show__message");
  }
}

let tipsButtons = document.querySelectorAll(".values__ranges button");
let personnalTipContent = document.querySelector(".person__tip");
let personnalTotalContent = document.querySelector(".total__money");
console.log(personnalTipContent);
console.log(personnalTotalContent);

function tipsPercentages() {
  for (let i = 0; i < tipsButtons.length; i++) {
    let removePercentage = parseInt(
      tipsButtons[i].firstChild.nodeValue.replace("%", "")
    );
    tipsButtons[i].value = removePercentage;
    tipsButtons[i].addEventListener("click", startOperations);
    billInput.addEventListener("input", startOperations);
    numberOfPersonInput.addEventListener("input", startOperations);
    function startOperations() {
      let newValue = (parseInt(tipsButtons[i].value) * billInput.value) / 100;
      let totalValue = newValue + parseInt(billInput.value);
      let tipForPerson = newValue / parseInt(numberOfPersonInput.value);
      let totalForPerson = parseFloat(totalValue / numberOfPersonInput.value);

      personnalTipContent.innerHTML = tipForPerson.toFixed(2);
      personnalTotalContent.innerHTML = totalForPerson.toFixed(2);

      if (isNaN(tipForPerson) || tipForPerson === Infinity) {
        personnalTipContent.textContent = "0.00";
      }
      if (isNaN(totalForPerson) || totalForPerson === Infinity) {
        personnalTotalContent.textContent = "0.00";
      }
    }
  }
}

let resetButton = document.querySelector(".button__reset");
resetButton.addEventListener("click", resetValues);

function resetValues() {
  personnalTipContent.textContent = "0.00";
  personnalTotalContent.textContent = "0.00";
  billInput.value = "0";
  numberOfPersonInput.value = "0";
}
