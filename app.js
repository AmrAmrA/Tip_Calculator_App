// Get the three inputs from the DOM : Bill Input, Number of People input and the custom tip input
let billInput = document.querySelector(".bill__input");
let numberOfPersonInput = document.querySelector(".people__input");
let customTip = document.querySelector("#customValue");
let errorPeople = document.querySelector(".error__people");

billInput.addEventListener("input", onlyNumbers);
numberOfPersonInput.addEventListener("input", onlyNumbers);
customTip.addEventListener("input", onlyNumbers);

// A function to force users to put only numbers in the inputs
// The function is executed when we touch any input
// The function allows also to prevent the user if he lets the input for the persons number empty
function onlyNumbers() {
  tipsPercentages();

  billInput.value = billInput.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");

  numberOfPersonInput.value = numberOfPersonInput.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");

  customTip.value = customTip.value
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

let totalValue = "";
let tipForPerson = "";
let totalForPerson = "";
let newValue = "";

// We loop through the first five buttons to delete the percentage (%) sign
// After we start to calculate the tips when we click on the buttons or the inputs
function tipsPercentages() {
  for (let i = 0; i < tipsButtons.length; i++) {
    let removePercentage = parseInt(
      tipsButtons[i].firstChild.nodeValue.replace("%", "")
    );
    tipsButtons[i].value = removePercentage;
    tipsButtons[i].addEventListener("click", startOperations);
    function startOperations() {
      newValue = (parseInt(tipsButtons[i].value) * billInput.value) / 100;
      totalValue = newValue + parseInt(billInput.value);
      tipForPerson = newValue / parseInt(numberOfPersonInput.value);
      totalForPerson = parseFloat(totalValue / numberOfPersonInput.value);

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
  startOperations();
  payCustomtip();
}
tipsPercentages();

let resetButton = document.querySelector(".button__reset");
resetButton.addEventListener("click", resetValues);

// A  function to reset every input values to start new calculations
// The function is executed with an event with the Reset Button when we click on it
function resetValues() {
  personnalTipContent.textContent = "0.00";
  personnalTotalContent.textContent = "0.00";
  billInput.value = "0";
  numberOfPersonInput.value = "0";
  customTip.value = "";
}

// A specific function to calculate tips for the custom input
// The function is executed inside the TipsPercentage function
function payCustomtip() {
  let firstOperation = (parseInt(customTip.value) * billInput.value) / 100;
  let totalOpeartion = firstOperation + parseInt(billInput.value);
  let customTipForPerson = firstOperation / parseInt(numberOfPersonInput.value);
  let customTotalForPerson = parseFloat(
    totalOpeartion / numberOfPersonInput.value
  );

  personnalTipContent.innerHTML = customTipForPerson.toFixed(2);
  personnalTotalContent.innerHTML = customTotalForPerson.toFixed(2);

  if (isNaN(customTipForPerson) || tipForPerson === Infinity) {
    personnalTipContent.textContent = "0.00";
  }
  if (isNaN(customTotalForPerson) || totalForPerson === Infinity) {
    personnalTotalContent.textContent = "0.00";
  }
}
