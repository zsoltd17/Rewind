// Get elements from page
const btnRun = document.querySelector('#btnSubmit');
const result = document.querySelector('#result');
const alertMsg = document.querySelector('#alert');

// Get String from the page
// Controller function
function getValue() {
    alertMsg.classList.add("invisible");

    let inputString = document.querySelector('#inputString').value;
    let revString = reverseString(inputString);

    displayString(revString);
}
// Reverse the string
// Logic function
function reverseString(inputString) {
    let revString = [];

    // Reverse a string using a for loop
    for (let i = inputString.length - 1; i >= 0; i--) {
        revString += inputString[i];
    }

    return revString;
}
// Display reversed string to user
// Display function
function displayString(revString) {
    result.innerHTML = `${revString}`;
    alertMsg.classList.remove("invisible");
}

btnRun.addEventListener('click', getValue);