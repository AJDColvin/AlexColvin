function showAbout(element) {
    document.getElementById("about").style.display = "block";
    document.getElementById("projects").style.display = "none";
    if (element) moveUnderline(element);
}

function showProjects(element) {
    document.getElementById("projects").style.display = "block";
    document.getElementById("about").style.display = "none";
    if (element) moveUnderline(element);
}

// --------- Robot Gif ----------
function surpriseBot() {
    document.getElementById("robot-gif").style.display = "none";
    document.getElementById("robot-surprise").style.display = "block";
    setTimeout(returnBotGif, 250);
}

function returnBotGif() {
    document.getElementById("robot-gif").style.display = "block";
    document.getElementById("robot-surprise").style.display = "none";

}
// --------- Gliding Underline ----------
function moveUnderline(element) {
    const underline = document.getElementById("menu-underline");
    underline.style.width = element.offsetWidth + "px";
    underline.style.left = element.offsetLeft + "px";
}

// Initialize underline position
window.onload = function() {
    const aboutLink = document.querySelector('.links-text'); // Assuming About is the first one
    if (aboutLink) {
        moveUnderline(aboutLink);
    }
};
