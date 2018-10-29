
let arow = document.getElementsByClassName("prog")[0];
function pageScroll() {

let tracker = document.getElementById("tracking");
let pageY = pageYOffset;
let i = 1;
    tracker.textContent = `${pageY} px`;
   if (pageY > 2300) {
    setTimeout(function() {$(".arowing").animate({width: "95%"}, 2000)}, 1000);
    setTimeout(function() {$(".arowing2").animate({width: "90%"}, 2000)}, 2000);
    setTimeout(function() {$(".arowing3").animate({width: "80%"}, 2000)}, 3000);
    setTimeout(function() {$(".arowing4").animate({width: "95%"}, 2000)}, 4000);
    setTimeout(function() {$(".arowing5").animate({width: "90%"}, 2000)}, 5000);
    setTimeout(function() {$(".arowing6").animate({width: "75%"}, 2000)}, 6000);
    setTimeout(function() {$(".arowing7").animate({width: "92%"}, 2000)}, 7000);
    setTimeout(function() {$(".arowing8").animate({width: "85%"}, 2000)}, 8000);
   }
   if (pageY > 2700) {
       setTimeout(function() {$(".arowing9").animate({width: "100%"}, 2000)}, 1000);
       setTimeout(function() {$(".arowing10").animate({width: "80%"}, 2000)}, 2000);
       setTimeout(function() {$(".arowing11").animate({width: "50%"}, 2000)}, 3000);
   }
   
}
window.onscroll = pageScroll;


let navMenu = document.getElementsByClassName("nav-bar")[0];

function navigationb(e) {
    if (!e) {
        e = window.event;
    }
    let targeting = e.target;
    if (targeting.id == "ab") {
        window.scrollBy(0, 543);
    }
    if (targeting.id == "ed") {
        window.scrollBy(0, 1298);
    }
    if (targeting.id == "sk") {
        window.scrollBy(0, 2353);
    }
    
}



navMenu.addEventListener("click", navigationb, false);

$(function() {
    if (pageYOffset > 2300) {
        $(".arowing").css({width: "500px"}, 200);
    }
});