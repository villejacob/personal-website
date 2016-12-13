var height = $(window).height();
$(window).on('scroll', function(){
	window.requestAnimationFrame(function(){
		var distance = $(window).scrollTop();
		$(".logo-container").css({
			"transform": "translate3d(0," + distance * -0.3 + "px, 0)"
		});
		$(".film").css("opacity", -0.9*(distance/height - 1));
	});
});