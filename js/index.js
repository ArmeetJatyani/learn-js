console.log("index.js started");

inputField = document.getElementById("input");
title = document.getElementById("title");


function updateTitle() {
    title.innerHTML = inputField.value;
}