let btnEl = document.getElementById("submit");
let form = document.querySelector(".form");
let errorEl = document.querySelector(".error-icon");
let input = document.getElementById("text");
let message = document.querySelector(".error-message");


form.addEventListener("submit", validate);
btnEl.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    let inputValue = input.value.trim();
    console.log(inputValue);

    if (inputValue === '') {
        message.style.display = 'block';
        errorEl.style.display = 'block';
        input.classList.add("input-error");
    } else if (!pattern(inputValue)) {
        message.style.display = 'block';
        errorEl.style.display = 'block';
        input.classList.add("input-error");
    } else {
        message.style.display = 'none';
        errorEl.style.display = 'none';
        input.classList.remove("input-error");
    }
    
}


function pattern(input) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input);
}

