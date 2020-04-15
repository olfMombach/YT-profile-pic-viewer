console.log("Started");

let img = document.createElement("img");
img.style.display = "none";
img.style.position = "absolute";
img.id = "profilePicMover";
document.appendChild(img);

let comments = document.getElementsByTagName("ytd-comments")[0];

comments.addEventListener("mousemove");