

function pageScroll() {
let tracker = document.getElementById("tracking");
let pageY = pageYOffset;
    tracker.textContent = `${pageY} px`;
}
//window.onscroll = pageScroll;


let tar = document.getElementById("data-contact2");
tar.onclick = function() {
    this.style.color = "red";
}