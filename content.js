let img = document.createElement("img");
img.style.display = "none";
img.style.position = "absolute";
img.id = "profilePicMover";
img.src = "http://hoppla1232.bplaced.net/assets/cat2.png";
img.style.zIndex = "99999";
document.body.appendChild(img);

window.setTimeout(e => {
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
}, 2000);
