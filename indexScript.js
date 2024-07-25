let isDirty = false;       
window.addEventListener("DOMContentLoaded", loadedHandler);
window.addEventListener("beforeunload", leavePageWarning);

function loadedHandler() { 
    let textBox1 = document.querySelector("#destButton");
    textBox1.addEventListener("click", showDestForm);
    
    let textBox2 = document.querySelector("#dateButton");
    textBox2.addEventListener("click", showDateForm);
    

    let inputs = document.querySelectorAll("input");
    for(let input of inputs){
        if(input.value == "Submit"){
            input.addEventListener("click", function () { onSubmitForm(); });
        } else {
            input.addEventListener("change", function () { makeDirty(); });
        }
    }

 }


function showDestForm(){
    document.getElementById("destForm").style.display = "flex";
    document.getElementById("dateForm").style.display = "none";
}

function showDateForm(){
    document.getElementById("dateForm").style.display = "flex";
    document.getElementById("destForm").style.display = "none";
}

function leavePageWarning(event){
    if(isDirty){
        event.returnValue = "Hi";
    }
}

function makeDirty(){
    isDirty = true;
}

function onSubmitForm(){
    isDirty = false;
}

// document.getElementById("destButton").onclick = showDestForm;
// document.getElementById("dateButton").onclick = showDateForm;