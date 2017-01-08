// only runs on desktop browswers
$(document).scroll(function() {
	if (window.innerHeight < window.innerWidth || window.innerWidth >= 1024) {
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
		
		// fade sections in as user scrolls page
		var scrollBottom = $(window).scrollTop() + $(window).height();
		
		// fade section.about in
		if (scrollBottom >= $(".section.about").offset().top + 200) {
			$("#portrait").css("opacity", "1");
			$("#portrait").css("margin", "20px");
		
			$("#aboutText").css("opacity", "1");
			$("#aboutText").css("margin", "20px");
		}
		
		// fade section.work in
		if (scrollBottom >= $(".section.work").offset().top + 200) {
			$(".videoButton").css("opacity", "1");
		}
		
		// fade section.ref in
		if (scrollBottom >= $(".section.ref").offset().top + 200) {
			$(".ref_box").css("opacity", "1");
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