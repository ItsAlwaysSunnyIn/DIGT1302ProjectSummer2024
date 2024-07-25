window.addEventListener("DOMContentLoaded", loadedHandler);
let up = false;
let arrow = "↓";    

function loadedHandler() {   

    let blogPosts = document.querySelectorAll("article");
    for (let post of blogPosts) {
        let postTitle = post.querySelector(".postTitle");
        let postContent = post.querySelector(".postContent");
		postTitle.addEventListener("click", function () { postTitleClicked(postTitle, postContent); });
	}
 }


function postTitleClicked(postTitle, postContent) {
    if(up){
        up = false;
        arrow = "↓";
        postContent.style.display = "none";
        postTitle.lastChild.textContent = "Click to Expand Post " + arrow;
    } else {
        up = true;
        arrow = "↑";
        postContent.style.display = "block";
        postTitle.lastChild.textContent = "Click to Collapse Post " + arrow;
    }
}
// document.getElementById("destButton").onclick = showDestForm;
// document.getElementById("dateButton").onclick = showDateForm;