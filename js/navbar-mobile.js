$(document).ready(function() {
        $("button").click(function() {
                if($("#navbar-button").attr("src") == "imgs/open.png"){
                    $("#navbar-button").attr("src", "imgs/close.png");
                }else{
                    $("#navbar-button").attr("src", "imgs/open.png");
                }
                if($("li").attr('navlink') == "true") {
                    $(".item_left").toggle("slow");
                    $(".item_right").toggle("slow");
                }
            }
        )
    }
);