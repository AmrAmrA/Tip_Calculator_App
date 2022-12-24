let billInput = document.querySelector('.bill__input');
let numberOfPersonInput = document.querySelector('.people__input'); 
let errorPeople = document.querySelector('.error__people'); 
console.log(errorPeople);

billInput.addEventListener('input', onlyNumbers)
numberOfPersonInput.addEventListener('input', onlyNumbers)

function onlyNumbers() {
    billInput.value = billInput.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); 
    numberOfPersonInput.value = numberOfPersonInput.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); 


    if(numberOfPersonInput.value == 0 || numberOfPersonInput.value == "") {
        numberOfPersonInput.classList.add('emptyInput')
        errorPeople.classList.add('show__message')
    }
    else {
        numberOfPersonInput.classList.remove('emptyInput')
        errorPeople.classList.remove('show__message')
    }
    console.log (typeof(billInput.value));
    console.log(numberOfPersonInput.value );
}