let isDirty = false;
let isError = false; 
window.addEventListener("DOMContentLoaded", loadedHandler);
window.addEventListener("beforeunload", leavePageWarning);

function loadedHandler() { 

    let inputs = document.querySelectorAll("input");
    for(let input of inputs){
        if(input.value == "Submit"){
            input.addEventListener("click", function () { onSubmitForm(); });
        } else {
            input.addEventListener("change", function () { makeDirty(); });
        }

    }

    var accountForm = document.querySelector("#accountForm");
    accountForm.addEventListener("submit", accountFormSubmit);

 }

function leavePageWarning(event){
    if(isDirty){
        event.returnValue = "Hi";
    }
}

function makeDirty(){
    isDirty = true;
}

function onSubmitForm(event){
    isDirty = false;
}

function accountFormSubmit(event) {
    isError = false;
    event.preventDefault();
    var error = document.getElementById("error1");

    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    
    if (password != password2){
        error.textContent = "Error: Passwords do not match";
        isError = true;
    }

    if(event.target.id == "destForm" && !isError){
        console.log("Hello");
        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;
        var paragraph = document.createElement("p");
        paragraph.innerHTML = from + "<br>" + to;
        document.querySelector("main").appendChild(paragraph);
    }
}

