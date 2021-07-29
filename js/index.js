console.log("index.js started");


inputField = document.getElementById("input");
title = document.getElementById("title");

inputField.focus();

function updateTitle() {
    title.innerHTML = inputField.value;
    inputField.style.width = inputField.value.length + 4 + "ch";
}

function copyField() {
    if (inputField.value.length != 0) {
        inputField.select();
        inputField.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied the text: " + inputField.value);
    }
    
}