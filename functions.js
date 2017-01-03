$(document).scroll(function() {
	if (window.innerHeight < window.innerWidth) {
		// fix header bar when scrolling past it
		if ($(window).scrollTop() >= window.innerHeight - 60) {
			$("#headerBar").css("position", "fixed");
		} else {
			$("#headerBar").css("position", "static");
		}
	
		// show top left ribbon
		if ($(window).scrollTop() >= (window.innerHeight) - 60) {
			$("#topLeftRibbon").css("top", "15px");
		} else {
			$("#topLeftRibbon").css("top", "-100px");
		}
	
		// fade section.about in
		if ($(window).scrollTop() >= $(".section.about").offset().top - (window.innerHeight * 0.5)) {
			$("#portrait").css("opacity", "1");
			$("#portrait").css("margin", "20px");
		
			$("#aboutText").css("opacity", "1");
			$("#aboutText").css("margin", "20px 20px 30px 20px");
		}
	}
});

// scroll to div
function jumpTo(dest, mobile) {
	if (dest !== null) {
		var target = ".section." + dest;
		$("body").animate({
			scrollTop: $(target).offset().top - 60
		}, 500);
	}
	
	// close menu on mobile
	if (mobile) {
		$("#mobileMenuFull").css("opacity", "0");
		$("#mobileMenuFull").css("pointer-events", "none");
		$(".menuIconBar").removeClass("change");
	}
}

// slide video in from left
function playVideo(url, box) {
	$(box.childNodes[3]).css("left", "0px");
	setTimeout(function() {
		$(box.childNodes[3]).attr("src", "https://player.vimeo.com/video/" + url + "?title=0&byline=0&portrait=0");
	}, 1000);
}

// mobile menu
function toggleMobileMenu(x) {
	if ($("#mobileMenuFull").css("opacity") == 0) {
		$("#mobileMenuFull").css("opacity", "1");
		$("#mobileMenuFull").css("pointer-events", "auto");
		
		// animate menu button
		$(".menuIconBar").addClass("change");
	} else {
		$("#mobileMenuFull").css("opacity", "0");
		$("#mobileMenuFull").css("pointer-events", "none");
		
		// animate menu button
		$(".menuIconBar").removeClass("change");
	}
}