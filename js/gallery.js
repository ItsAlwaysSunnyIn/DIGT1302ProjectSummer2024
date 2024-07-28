window.addEventListener("DOMContentLoaded", loadedHandler);
var change = true;

function loadedHandler() {
    let timerId = setInterval(switchImg, 5000);

}



function switchImg() {
    if (change == true) {
        document.querySelector("#image1 > a").href="blog.html#article2";
        document.querySelector("#image1 > a > img").src="images/vacation.jpeg";
        document.getElementById("blogTitle").innerHTML = "Carribean Islands On Everyone's Bucketlist ";
        document.getElementById("authorName").textContent = "Alexandra Nicholaides | July 24, 2024";
        change = false;
    }
    else {
        document.querySelector("#image1 > a").href="blog.html#article1";
        document.querySelector("#image1 > a > img").src="images/Cyprus.png";
        document.getElementById("blogTitle").innerHTML = "Top 5 Places to Visit in Cyprus ";
        document.getElementById("authorName").textContent = "Alexandra Nicholaides | June 9, 2024";
        change = true;
    }

}