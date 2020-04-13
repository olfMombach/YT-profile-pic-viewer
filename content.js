window.onload = function(e) {
    let el = document.createElement("img");
    el.id = "profilePicShower";
    el.style = "display: none; position: absolute;";
    document.body.appendChild(el);

    let profilePics = Array.prototype.slice.call(document.querySelectorAll("yt-img-shadow>img#img.style-scope.yt-img-shadow")).filter(x => {
        return x.src.startswith("https://yt3.ggpht.com") && x.parentNode.id !== "hearted-thumbnail";
    });

    for (let target of profilePics){
        target.addEventListener("mousemove", e => {
            let x = e.clientX;
            let y = e.clientY;
            let mover = document.getElementById("mover");
            mover.style.left = x + 40 + "px";
            mover.style.top = y + 40 + "px";
        });
        target.addEventListener("mouseenter", e => {
            document.getElementById("mover").style.display = "unset";
            this.console.log(e);
        });
        target.addEventListener("mouseleave", e => {
            document.getElementById("mover").style.display = "none";
        });
    }
};