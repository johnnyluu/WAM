$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 550) {
			$("header").removeClass("top");
		} else {
			$("header").addClass("top");
		}
	});

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	// $('.has-sub').hover(
	// 	function() {
	// 		$(this).addClass('active');
	// 		$('#subnav').addClass('open');
	// 	},
	// 	function() {
	// 		var on = $(this);
	// 		$('#subnav').hover(
	// 			function() {
	// 				on.addClass('active')
	// 			},
	// 			function() {
	// 				on.removeClass('active')
	// 			}
	// 		)
	// 		$(this).removeClass('active');
	// 		$('#subnav').removeClass('open');
	// 	}
	// )
});