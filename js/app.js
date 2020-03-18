// $(".seemore__outer").on("click",function(){
//     var val = "1.3";
//     $(".gallery__image").css({
//         transition: "all .5s ease",
//         "-webkit-transform": "scale(" + val + ")"
//     });
// });

var locations = ["japan", "israel", "vietnam", "thailand", "jordan"];

// $(document).ready(function(){
//     var checkInterval = setInterval(function(){
//         var currentLocation = document.querySelector(".slick-active").children[0].children[0].id;
//         for(var i = 0; i < locations.length; i++){
//             if(currentLocation == "gallery__content-" + locations[i]){
//                 $("#gi__japan").css({
//                     'background-image': '-moz-linear-gradient(top,rgba(0,0,0,0)80%,rgba(0,0,0,0.65)100%), url(images/'+locations[i]+'.jpg)', 
//                     'background-image': '-webkit-gradient(linear,left top,left bottom,color-stop(80%,rgba(0,0,0,0)),color-stop(100%,rgba(0,0,0,0.65))), url(images/' + locations[i] + '.jpg)', 
//                     'background-image': 'background-image: -webkit-linear-gradient(top,rgba(0,0,0,0)80%,rgba(0,0,0,0.65)100%), url(images/' + locations[i] + '.jpg)', 
//                     'background-image': '-o-linear-gradient(top,rgba(0,0,0,0)80%,rgba(0,0,0,0.65)100%), url(images/' + locations[i] + '.jpg)', 
//                     'background-image': 'linear-gradient(to bottom,rgba(0,0,0,0)80%,rgba(0,0,0,0.65)100%), url(images/' + locations[i] + '.jpg)'
//                 });
//             }
//         }
//     }, 10);

// });

$(".seemore__outer").on("click",function(){
    $("#gallery__content-japan").css({
        transition: "all .3s ease",
        left: "-100%"
    });
    $("#gallery__content-israel").css({
        transition: "all .3s  ease",
        right: 0
    });
});

$(document).ready(function(){
    
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

// $("#gallery__content-japan").on("click",function(){
//     $(".slider").css({
//         transition: "all .5s ease",
//         bottom: 0
//     });
//     setTimeout(function(){window.location.href='japan.html'},500);
// });

// $("#gallery__content-israel").on("click",function(){
//     $(".slider").css({
//         transition: "all .5s ease",
//         bottom: 0
//     });
//     setTimeout(function(){window.location.href='israel.html'},500);
// });

$(".seemore__outer").on("click",function(){
    var currentLocation = document.querySelector(".slick-active").children[0].children[0].id;
    for(var i = 0; i < locations.length; i++){
        if(currentLocation == "gallery__content-" + locations[i]){
            console.log("gallery__content-" + locations[i]);
            console.log(locations[i] + '.html');
            window.location.href=locations[i] + '.html';
        }
    }
});

$("#logo_image").mouseover(function(){
    document.getElementById("logo_image").src = "images/logoblack.png";
});

$("#logo_image").mouseout(function(){
    document.getElementById("logo_image").src = "images/logo.png";
});

$("#backtotop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});