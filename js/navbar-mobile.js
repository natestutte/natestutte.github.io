$(document).ready(function() {
        $("button").click(function() {
                if($("#navbar-button").attr("src") == "imgs/open.png"){
                    $("#navbar-button").attr("src", "imgs/close.png");
                }else{
                    $("#navbar-button").attr("src", "imgs/open.png");
                }
<<<<<<< HEAD
                if($("li").attr('navlink') == "true") {
                    $(".item_left").toggle("slow");
                    $(".item_right").toggle("slow");
                }
=======
                $(".navbar li").toggle("slow");
>>>>>>> 9c67a0ded6f8367a35d046f1a48556abc15e70d4
            }
        )
    }
);