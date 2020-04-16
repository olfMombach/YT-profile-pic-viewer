console.log("Started");

let img = document.createElement("img");
img.style.display = "none";
img.style.position = "absolute";
img.id = "profilePicMover";
document.appendChild(img);
document.addEventListener("load", e => {
    console.log("attached")
    let comments = document.getElementsByTagName("ytd-comments")[0];

    comments.addEventListener("mousemove", e => {
        if (e.target.tagName === "IMG") {
            console.log("Moving on picture");
            let mover = document.getElementById("profilePicMover");
            mover.style.left = e.x + 40 + "px";
            mover.style.top = e.y + 40 + "px";
            mover.style.display = "unset";
        }
    });
    comments.addEventListener("mouseleave", e => {
        console.log("left");
        let mover = document.getElementById("profilePicMover");
        mover.style.display = "none";
    });
});
