let isDirty = false;
let isError = false; 
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

        if(input.type == "range"){
            input.addEventListener("change", function () { changeTitle(input); });
        }
    }

    var destForm = document.querySelector("#destForm");
    destForm.addEventListener("submit", destFormSubmit);

    var dateForm = document.querySelector("#dateForm");
    dateForm.addEventListener("submit", dateFormSubmit);

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

function onSubmitForm(event){
    isDirty = false;
}

function destFormSubmit(event) {
    isError = false;
    event.preventDefault();
    var error = document.getElementById("error1");

    var minTemp = parseInt(document.getElementById("minTemp").value);
    var maxTemp = parseInt(document.getElementById("maxTemp").value);
    var minPrice = parseInt(document.getElementById("minPrice").value);
    var maxPrice = parseInt(document.getElementById("maxPrice").value);
    if(minTemp > maxTemp){
        error.textContent = "Error: Minimum Temperature must be less than Maximum Temperature";
        isError = true;
    }
    if(minPrice > maxPrice){
        error.textContent = "Error: Minimum Price must be less than Maximum Price";
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

function dateFormSubmit(event) {
    isError = false;
    event.preventDefault();
    var error = document.getElementById("error2");

    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    console.log("Start: " + start);
    console.log("End: " + end);

    var minTemp = parseInt(document.getElementById("minTemp2").value);
    var maxTemp = parseInt(document.getElementById("maxTemp2").value);
    var minPrice = parseInt(document.getElementById("minPrice2").value);
    var maxPrice = parseInt(document.getElementById("maxPrice2").value);
    if(minTemp > maxTemp){
        error.textContent = "Error: Minimum Temperature must be less than Maximum Temperature";
        isError = true;
    }
    if(minPrice > maxPrice){
        error.textContent = "Error: Minimum Price must be less than Maximum Price";
        isError = true;
    }
    if(start > end){
        error.textContent = "Error: Start Date must be before End Date";
        isError = true;
    }
    

    if(event.target.id == "dateForm" && !isError){
        error.textContent = "";
        console.log("Hello");
        var from = document.getElementById("from2").value;
        var paragraph = document.createElement("p");
        paragraph.innerHTML = from + "<br>";
        document.querySelector("main").appendChild(paragraph);
    }
}

function changeTitle(input){
    input.title = input.value;
}

// document.getElementById("destButton").onclick = showDestForm;
// document.getElementById("dateButton").onclick = showDateForm;