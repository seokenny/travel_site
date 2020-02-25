$(".seemore__outer").on("click",function(){
    var val = "1.3";
    $(".gallery__image").css({
        transition: "all .5s ease",
        "-webkit-transform": "scale(" + val + ")"
    });
});

function onMenuClick() {
    document.getElementById("nav__burger").classList.toggle("change");
    document.getElementById("nav__slide").classList.toggle("active");
}