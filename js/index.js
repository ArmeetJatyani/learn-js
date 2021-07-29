console.log("index.js started");


inputField = document.getElementById("input");
title = document.getElementById("title");

inputField.focus();

function updateTitle() {
    title.innerHTML = inputField.value;
    inputField.style.width = inputField.value.length + 4 + "ch";
}