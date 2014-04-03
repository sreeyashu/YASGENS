$(document).ready(function() {
	
	
	$('.faq').click(function () {
		 $('.widget').addClass('faq-widget');
		 $('.content_row').addClass('widget_open');
		 $('.wcm-messages').addClass('widget_open');
	 });
	$('.icon_widget_close').click(function () {
		 $('.widget').removeClass('faq-widget');
		 $('.content_row').removeClass('widget_open');
		 $('.wcm-messages').removeClass('widget_open');
	 });
	 
	 var didResize;
	 //hasResized();
	 $(window).on('resize', function(){
		//didResize = true;
	 });
	 $('.login_bg').on('resize', function(){
		 alert(2);
		didResize = true;
	 });
	 
	 setInterval(function() {
		if (didScroll) {
			hasResized();
			didResize = false;
		}
	}, 250);
	 
	 function hasResized(){
	 	var widgetHeight;
	 	widgetHeight = $('.login_bg').outerHeight(true) - $('.site_header').outerHeight(true);
		$('.widget').css('height',widgetHeight);
	 };
	 
	 
	 
	
	
	
	$('body').removeAttr("style");
	/* we need this only on touch devices */
if (Modernizr.touch) {
	
    /* cache dom references */ 
    var $body = jQuery('body'); 

    /* bind events */
    $(document)
    .on('focus', 'input', function(e) {
        $body.addClass('fixfixed');
    })
    .on('blur', 'input', function(e) {
        $body.removeClass('fixfixed');
    });
} 

/*function isTouchDevice(){
    return typeof window.ontouchstart !== 'undefined';
}
alert(isTouchDevice());*/
	
	
	
	$('.fixed_nav').stickyMojo({footerID: '.footer', contentID: '.content_col'});
	$(".f1").mask('++++ 0000/0000/0000/0000/0 ++++');
	 $(".f2").mask('00000 00000');


	

(function() {
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
      document.createTextNode("@-ms-viewport{width:auto!important}")
    );
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
  }
})();


$('.accounts_menu').click(function () {
		 alert(2);
		 $('#accountList').css('left','0');
	 });
$('.viewport_icon').click(function () {
	$('#accountList').css('left','100%')
});

































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
	
	// $('.tooltip').tooltipster();
	$('.selected_details__account').on('click', function() {
		$('.flyout_selection').toggleClass('flyout_active');
		$('.selected_details__account.dropdown_arrow').toggleClass('dropdown-active');
		$(".flyout_list_items").removeClass('show_listitems');
		setTimeout(function () {
			$(".flyout_list_items").addClass('show_listitems');
		}, 300);
		
			
	});
		
	$('.show_filters').on('click', function() {
		  //$('.filter_block').slideToggle();
	 });
	 $('.filter_period').on('click', function() {
		 // $('.option_period').toggleClass('show_active');
	 });


});



