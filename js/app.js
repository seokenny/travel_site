$(".seemore__outer").on("click",function(){
    var val = "1.3";
    $(".gallery__image").css({
        transition: "all .5s ease",
        "-webkit-transform": "scale(" + val + ")"
    });
});

var active = 0;

function onMenuClick() {
    document.getElementById("nav__burger").classList.toggle("change");
    document.getElementById("nav__slide").classList.toggle("active");
    if(active == 0){
        document.getElementById("logo_image").src = "images/logoblack.png";
        active = 1;
    } else {
        document.getElementById("logo_image").src = "images/logo.png";
        active = 0;
    }
}

$("#logo_image").mouseover(function(){
    document.getElementById("logo_image").src = "images/logoblack.png";
    console.log("asdasd");
});

$("#logo_image").mouseout(function(){
    document.getElementById("logo_image").src = "images/logo.png";
    console.log("asdasd");
});