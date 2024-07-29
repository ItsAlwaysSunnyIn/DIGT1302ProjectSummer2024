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

    var signinForm = document.querySelector("#signinForm");
    signinForm.addEventListener("submit", signinFormSubmit);

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

function signinFormSubmit(event) {
    isError = false;
    event.preventDefault();
    var error = document.getElementById("error1");

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if((email == "samh28@my.yorku.ca" || email == "alexnic@my.yorku.ca") && password == "Alwayssunny1!"){
        console.log("Hello");
        var paragraph = document.createElement("p");
        paragraph.innerHTML = "User: " + email + " logged in.";
        document.querySelector("#result").innerHTML = "";
        document.querySelector("#result").appendChild(paragraph);
    } else {
        alert("Sorry! User: " + email + " does not exist and/or password is incorrect.");
    }
}

