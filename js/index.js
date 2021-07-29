console.log("index.js started");


inputField = document.getElementById("input");
title = document.getElementById("title");
notification = document.getElementById("notification");
inputField.focus();

function updateTitle() {
    inputValue = inputField.value;
    
    if (inputField.value.length > 25) {
        inputValue = inputValue.slice(0, 25) + "...";
    }
    title.innerHTML = inputValue;
    document.title = inputValue;
    inputField.style.width = inputValue.length + 4 + "ch";
}

function copyField() {
    if (inputField.value.length != 0) {
        inputField.select();
        inputField.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied the text: " + inputField.value);
    }
    
}

function noti(msg) {
    notification.innerHTML = msg
    notification.style.transform = "scale(1.2)";
    setTimeout(function () {
        notification.style.transform = "scale(1)";
    }, 100)
}