$(function(){

	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
	});
	
	// $('.menu > ul > li > a').on('click', function(){
	// 	var $offset = $( $(this).attr('href') ).offset().top;
	// 	$('body, html').animate({
	// 		scrollTop: $offset
	// 	}, 700);
	// 	$('body').removeClass('show-menu');
	// });
	
	
	
	// $(window).on('load', function(){
		
	// 	$('body').addClass('loaded');
		
	// });
	
	
});