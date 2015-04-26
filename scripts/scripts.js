$(function(){
	// Smooth Scroll
	$('a').smoothScroll({
		speed: 800,
		offset: -125
	});

	// Trigger Scroll Events
	$(window).scroll(function(){
		
		//When scrolled past header, add the alternate class to nav bar
		if($(window).scrollTop() > 400) {
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