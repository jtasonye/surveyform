// Initilizes drop from styles and html file
const drop = document.getElementById("drop");

// Delegates actions to the buttons
function handleRadioClick () {
    if (document.getElementById('radio1').checked) {
        drop.style.display = "block"; // shows dropbox
    } if (document.getElementById('radio2').checked) {
        drop.style.display = "none"; // hides dropbox
    } else {
        box.style.display = "none"; // dropbox stays hidden
    }
}

// Adds click event handlers to all radio buttons
const radioButtons = document.querySelectorAll('input[name="radio-button"]'); // For all the elements that are listed as "radio button"
radioButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioClick);
});