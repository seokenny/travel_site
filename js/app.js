$(".seemore__outer").on("click",function(){
    var val = "1.3";
    $(".gallery__image").css({
        transition: "all .5s ease",
        "-webkit-transform": "scale(" + val + ")"
    });
});