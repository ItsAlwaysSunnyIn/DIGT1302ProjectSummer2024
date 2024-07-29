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
// function validates passwords
function accountFormSubmit(event) {
    isError = false;
    event.preventDefault();
    var error = document.getElementById("error1");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;

    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    
    if (password != password2){
        error.textContent = "Error: Passwords do not match";
        isError = true;
    } else {
        if (!regex.test(password)){
            error.textContent = "Error: Password must be between 8 and 12 characters with Upper and Lowercase characters, special characters and digits."
            isError = true;
        }
    }


    if(event.target.id == "accountForm" && !isError){
        
        isDirty = false;
        window.location.href = "signin.html";
        alert("Thank you " + firstName + ". Account created for User: " + email);
    }
}

