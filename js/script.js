var height = $(window).height();
$(window).on('scroll', function(){
	window.requestAnimationFrame(function(){
		var distance = $(window).scrollTop();
		var fade = (distance/height);
		$(".logo-container").css({
			"transform": "translate3d(0," + distance * -0.3 + "px, 0)"
		});
		$(".about").css("opacity",  fade);
		$(".logo-container").css("opacity", -2.6*fade + 1);
	});
});