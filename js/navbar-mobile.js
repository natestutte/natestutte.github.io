$(document).ready(function() {
        $("button").click(function() {
                if($("#navbar-button").attr("src") == "imgs/open.png"){
                    $("#navbar-button").attr("src", "imgs/close.png");
                }else{
                    $("#navbar-button").attr("src", "imgs/open.png");
                }
                $("li").toggle("slow");
            }
        )
    }
);