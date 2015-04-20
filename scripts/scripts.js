$(function(){
	// Smooth Scroll
	$('a').smoothScroll({
		speed: 800,
		offset: -125
	});

	// Trigger Scroll Events
	$(window).scroll(function(){
	
		//Get scroll location percentage
		var windowHeight = $(window).height();
		var scrollHeight = $(window).scrollTop();
		var scrollPercentage =  (scrollHeight / windowHeight);
		
		//When scrolled past header, add the alternate class to nav bar
		if(scrollPercentage > 0.4) {
			$('body').addClass('scrolling');
			$('.navBar').addClass('slideInDown');
		} else {
			$('body').removeClass('scrolling');
			$('.navBar').removeClass('slideInDown');
		}
		
	});

	// Dropdown Navigation for Mobile
	$('.navBar .fa').on('click', function() {
	  $('.navBar ul').toggleClass('showMe');	
	});
	$('ul.nav a').on('click', function() {
		$('.navBar ul').toggleClass('showMe');
	});

});