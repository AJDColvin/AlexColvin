function showAbout() {
    document.getElementById("about").style.display = "block";
    document.getElementById("projects").style.display = "none";
}

function showProjects() {
    document.getElementById("projects").style.display = "block";
    document.getElementById("about").style.display = "none";

}

function surpriseBot() {
    document.getElementById("robot-gif").style.display = "none";
    document.getElementById("robot-surprise").style.display = "block";
    setTimeout(returnBotGif, 250);
}

function returnBotGif() {
    document.getElementById("robot-gif").style.display = "block";
    document.getElementById("robot-surprise").style.display = "none";

}