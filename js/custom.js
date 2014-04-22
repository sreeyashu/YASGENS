$(document).ready(function () {
	
	var $scroller = $(".scroll-container");
	var scrollContainerWidth = $(".scroll-container").width();
	var filterWidth=$('.filter_inner_block').width();
	if(scrollContainerWidth <= filterWidth){
		$('.scroll-menu').addClass('show-buttons');
	}
	$('.scroll-btn.left').click(function(event){
	
	onLeft(event);
	
	});
	
	$('.scroll-btn.right').click(function(event){
	onRight(event);
	
	});
	
	function onLeft(a) {
      slide(a, !0)
    };
    function onRight(a) {
      slide(a)
    };
    function slide(a, b) {
      var c = this,
        d =  $scroller.scrollLeft(),
        e =  $scroller.width(),
        f = b ? -e : e;
		f = f>0? 150: -150;
       $scroller.animate({
        scrollLeft: d + f
      }, 500, function () {
		  updateButtons();
      })
    };
	
	updateButtons=function () {
      $scroller.width() + $scroller.scrollLeft() + 60 >= this.$(".menu-links").outerWidth() ? this.$(".scroll-btn.right").addClass("inactive") : this.$(".scroll-btn.right").removeClass("inactive"), 0 === $scroller.scrollLeft() ? this.$(".scroll-btn.left").addClass("inactive") : this.$(".scroll-btn.left").removeClass("inactive")
    }
	
	//$('.wcm-service-nav').stickyMojo({
//        footerID: '.footer',
//        contentID: '.content_col'
//    });
//    $('.widget').stickyMojo({
//        footerID: '.footer',
//        contentID: '.content_col'
//    });
	$('.faq').click(function (e) {
        e.preventDefault();
		$('.wcm-faq').addClass('faq_pointer');
        $('.widget').addClass('faq-widget');
        $('.faq').addClass('active');
		$('.wcm-messages').addClass('widget_open');
		$('.content_row').addClass('widget_open');
    });
    $('.icon_widget_close').click(function (e) {
        e.preventDefault();
		$('.wcm-faq').removeClass('faq_pointer');
		$('.wcm-faq').removeClass('yash');
        $('.widget').removeClass('faq-widget');
        $('.faq').removeClass('active');
		$('.wcm-messages').removeClass('widget_open');
		$('.content_row').removeClass('widget_open');

    });
  
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = 80;
	
 //(function () {
//    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
//      var msViewportStyle = document.createElement("style");
//      msViewportStyle.appendChild(
//        document.createTextNode("@-ms-viewport{width:auto!important}")
//      );
//      document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
//    }
//  })();
//  if (Modernizr.touch) {
//    /* cache dom references */
//    var $body = $('body');
//    /* bind events */
//    $(document)
//      .on('focus', 'input', function (e) {
//        $body.addClass('fixfixed');
//      })
//      .on('blur', 'input', function (e) {
//        $body.removeClass('fixfixed');
//      });
//  }
//  $(window).scroll(function (event) {
//    didScroll = true;
//    if ($(".navigation_control").hasClass("menu-show")) {
//      $(".navigation_control").removeClass("menu-show");
//    }
//  });
//  setInterval(function () {
//    if (didScroll) {
//      hasScrolled();
//      didScroll = false;
//    }
//  }, 250);
//
//  function hasScrolled() {
//    var st = $(this).scrollTop();
//    if (Math.abs(lastScrollTop - st) <= delta)
//      return;
//    if (st > lastScrollTop && st > navbarHeight) {
//      // Scroll Down
//      $('.warning_area').css('top', '0');
//      $('.site_header').removeClass('nav-down').addClass('nav-up');
//    } else {
//      // Scroll Up
//      if (st + $(window).height() < $(document).height()) {
//        $('.warning_area').css('top', '80px');
//        $('.site_header').removeClass('nav-up').addClass('nav-down');
//      }
//    }
//    lastScrollTop = st;
//  }
//  $('.widget .module_listitem').addClass('hide');
//  //$('#' + sfNodeId).removeClass('hide');
//  
});






$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  function redirectIfNecessary() {
    if ('text/html' == jqXHR.getResponseHeader('Content-Type')) {
      var results = /data-target-url="(.*?)"/.exec(jqXHR.responseText);
      if (results && results.length == 2) {
        window.top.location.replace(results[1]);
      }
    }
  }
  jqXHR.always(redirectIfNecessary);
});

