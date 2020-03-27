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

// $(document).ready(function(){
//     console.log("rdy");
//     if($(".slick-active").children().children()[0].id == "gallery__content-japan"){
//         $("#gallery__content-japan").css({
//             color: "purple"
//         });
//         console.log("done");
//         console.log($(".slick-active").children().children()[0].id);
//     }
//     else if($(".slick-active").children().children()[0].id == "gallery__content-israel"){
//         $("#gallery__content-israel").css({
//             color: "purple"
//         });
//         console.log("done");
//         console.log($(".slick-active").children().children()[0].id);
//     }
// });

var currentActive = 0;

$("#nav__burger").on("click",function(){
    $(".nav__slide p").toggleClass("whenSlided");
});

function checkLocation() {
    if($(".slick-active").children().children()[0].id == "gallery__content-japan"){
        $(".gallery__image").removeClass("bgChangeIsrael");
        $(".gallery__image").removeClass("bgChangeIsrael2");
        $(".gallery__image").addClass("bgChangeJapan");
        $(".gallery__image").css(
            "background-image", "url(images/japan.jpg)"
        );
        currentActive = 0;
    }
    else if($(".slick-active").children().children()[0].id == "gallery__content-israel"){
        $(".gallery__image").removeClass("bgChangeJapan");
        $(".gallery__image").removeClass("bgChangeThailand");
        $(".gallery__image").removeClass("bgChangeThailand2");
        if(currentActive == 0) {
            $(".gallery__image").addClass("bgChangeIsrael");
        }
        else if(currentActive == 2) {
            $(".gallery__image").addClass("bgChangeIsrael2");
        }
        $(".gallery__image").css(
            "background-image", "url(images/israel.jpg)"
        );
        currentActive = 1;
        // checkFade();
    }
    else if($(".slick-active").children().children()[0].id == "gallery__content-thailand"){
        $(".gallery__image").removeClass("bgChangeIsrael");
        $(".gallery__image").removeClass("bgChangeIsrael2");
        $(".gallery__image").removeClass("bgChangeVietnam");
        $(".gallery__image").removeClass("bgChangeVietnam2");
        if(currentActive == 1) {
            $(".gallery__image").addClass("bgChangeThailand");
        }
        else if(currentActive == 3) {
            $(".gallery__image").addClass("bgChangeThailand2");
        }
        $(".gallery__image").css(
            "background-image", "url(images/thailand.jpg)"
        );
        currentActive = 2;
    }
    else if($(".slick-active").children().children()[0].id == "gallery__content-vietnam"){
        $(".gallery__image").removeClass("bgChangeThailand");
        $(".gallery__image").removeClass("bgChangeThailand2");
        $(".gallery__image").removeClass("bgChangeJordan");
        if(currentActive == 2) {
            $(".gallery__image").addClass("bgChangeVietnam");
        }
        else if(currentActive == 4) {
            $(".gallery__image").addClass("bgChangeVietnam2");
        }
        $(".gallery__image").css(
            "background-image", "url(images/vietnam.jpg)"
        );
        currentActive = 3;
    }
    else if($(".slick-active").children().children()[0].id == "gallery__content-jordan"){
        $(".gallery__image").removeClass("bgChangeVietnam");
        $(".gallery__image").removeClass("bgChangeVietnam2");
        $(".gallery__image").addClass("bgChangeJordan");
        $(".gallery__image").css(
            "background-image", "url(images/jordan.jpg)"
        );
        currentActive = 4;
    }
}

window.setInterval(function(){
    checkLocation();
},500);

var active = 0;

// function checkFade() {
//     if(currentActive == 1){
//         $(".gallery__content-para").toggleClass("whenSlided");
//     }
// }

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