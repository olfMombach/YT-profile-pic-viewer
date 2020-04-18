console.log("Start");

let img = document.createElement("img");
img.style.display = "none";
img.style.position = "absolute";
img.id = "profilePicMover";
img.style.zIndex = "99999";
document.body.appendChild(img);

function setUpListeners_comments(){
    let comments = document.getElementsByTagName("ytd-comments")[0];

    comments.addEventListener("mousemove", e => {
        if (e.target.tagName === "IMG") {
            let mover = document.getElementById("profilePicMover");
            mover.src = e.target.src.replace(/^(https.*)(=.*)$/gi, "$1");
            mover.style.left = e.pageX + 40 + "px";
            mover.style.top = e.pageY + 40 + "px";
            mover.style.display = "unset";
        }
    });
    comments.addEventListener("mouseleave", e => {
        let mover = document.getElementById("profilePicMover");
        mover.style.display = "none";
    });
}

window.setTimeout(setUpListeners_comments, 1000);
window.setTimeout(setUpListeners_comments, 3000);
window.setTimeout(setUpListeners_comments, 10000);

chrome.runtime.onMessage.addListener(request => {
    setUpListeners_comments();
});
