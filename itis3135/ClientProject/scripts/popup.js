const checkAge = document.getElementById("age-checkbox");
const confirmButton = document.getElementById("confirmation");
const popup = document.getElementById("age-popup");  // this is referring to the div element itself
const mainContent = document.getElementById("main-content");

checkAge.addEventListener('change', () => {
    // this is saying the confirm button is disabled when the age is not selected
confirmButton.disabled = !checkAge.checked;
});
confirmButton.addEventListener('click', () => { 
    popup.style.display = 'none';
    mainContent.style.display = 'block';
});
