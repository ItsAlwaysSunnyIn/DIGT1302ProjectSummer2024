window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {        
    let textBox1 = document.querySelector("#destButton");
    textBox1.addEventListener("click", showDestForm);

    let textBox2 = document.querySelector("#dateButton");
    textBox2.addEventListener("click", showDateForm);
 }


function showDestForm(){
    document.getElementById("destForm").style.display = "flex";
    document.getElementById("dateForm").style.display = "none";
}

function showDateForm(){
    document.getElementById("dateForm").style.display = "flex";
    document.getElementById("destForm").style.display = "none";
}
// document.getElementById("destButton").onclick = showDestForm;
// document.getElementById("dateButton").onclick = showDateForm;