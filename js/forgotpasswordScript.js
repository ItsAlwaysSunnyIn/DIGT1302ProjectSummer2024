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

    var forgotpassForm = document.querySelector("#forgotpassForm");
    forgotpassForm.addEventListener("submit", forgotpassFormSubmit);

 }
// Function to send warning message that user will lose form data
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
// alerts user that an email was sent to their email address (no email actually sent)
function forgotpassFormSubmit(event) {
    isError = false;
    event.preventDefault();
    var error = document.getElementById("error1");

    var email = document.getElementById("email").value;

    alert("A reset password email was sent to " + email);
}

