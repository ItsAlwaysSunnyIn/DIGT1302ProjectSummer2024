window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {        

    let blogPosts = document.querySelectorAll("article");
    for (let post of blogPosts) {
        let postTitle = post.querySelector(".postTitle");
        let postContent = post.querySelector(".postContent");
		postTitle.addEventListener("click", function () { postTitleClicked(postContent); });
	}
 }


function postTitleClicked(postContent) {

    postContent.style.display = "block";

}
// document.getElementById("destButton").onclick = showDestForm;
// document.getElementById("dateButton").onclick = showDateForm;