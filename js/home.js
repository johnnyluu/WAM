$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 550) {
        $("header").removeClass("top");
    } else{
    	$("header").addClass("top");
    }
}); //missing );