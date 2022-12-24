let billInput = document.querySelector(".bill__input");
let numberOfPersonInput = document.querySelector(".people__input");
let errorPeople = document.querySelector(".error__people");

billInput.addEventListener("input", onlyNumbers);
numberOfPersonInput.addEventListener("input", onlyNumbers);

let billInputValue = parseInt(
  (billInput.value = billInput.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1"))
);
let peopleValue = parseInt(
  (numberOfPersonInput.value = numberOfPersonInput.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1"))
);
function onlyNumbers() {
  if (numberOfPersonInput.value == 0 || numberOfPersonInput.value == "") {
    numberOfPersonInput.classList.add("emptyInput");
    errorPeople.classList.add("show__message");
  } else {
    numberOfPersonInput.classList.remove("emptyInput");
    errorPeople.classList.remove("show__message");
  }
}

let tipsButtons = document.querySelectorAll(".values__ranges button");

function tipsPercentages() {
  for (let i = 0; i < tipsButtons.length; i++) {
      let removePercentage = parseInt(
          tipsButtons[i].firstChild.nodeValue.replace("%", "")
          );
          tipsButtons[i].value = removePercentage;
        }
        
        console.log(tipsButtons[0].value * billInputValue / 100);
    }
    
    tipsPercentages();