$(document).ready(function() {
	$('body').removeAttr("style");
$('.fixed_nav').stickyMojo({footerID: '.footer', contentID: '.content_col'});


var didScroll;
var lastScrollTop = 0;
var delta = 5;
//var header = $('.site_header').outerHeight();
//var moduleheader= $('.module_main_header').outerHeight();
var navbarHeight = 0//$('.site_header').outerHeight();



$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
		$('.warning_area').css('top','0');
        $('.site_header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
		//$('.module_header').css('top','80px');
        if(st + $(window).height() < $(document).height()) {
			$('.warning_area').css('top','80px');
            $('.site_header').removeClass('nav-up').addClass('nav-down');
			
        }
    }
    lastScrollTop = st;
}


	
	$('input[type="text"]').focus(
    function(){
        $(this).parent('div').addClass('focus');
    }).blur(
    function(){
        $(this).parent('div').removeClass('focus');
    });
	
	
	$('.yashprint').on('click', function() {
		window.print();
	});
	
	 $('.tooltip').tooltipster();
	$('.selected_details__account').on('click', function() {
		$('.flyout_selection').toggleClass('flyout_active');
		$('.selected_details__account.dropdown_arrow').toggleClass('dropdown-active');
		$(".flyout_list_items").removeClass('show_listitems');
		setTimeout(function () {
			$(".flyout_list_items").addClass('show_listitems');
		}, 300);
		
			
	});
		
	$('.show_filters').on('click', function() {
		  $('.filter_block').slideToggle();
	 });
	 $('.filter_period').on('click', function() {
		  $('.option_period').toggleClass('show_active');
	 });


});



