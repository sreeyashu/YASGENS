$(document).ready(function () {
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = 0;
 (function () {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style");
      msViewportStyle.appendChild(
        document.createTextNode("@-ms-viewport{width:auto!important}")
      );
      document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
  })();
  if (Modernizr.touch) {
    /* cache dom references */
    var $body = $('body');
    /* bind events */
    $(document)
      .on('focus', 'input', function (e) {
        $body.addClass('fixfixed');
      })
      .on('blur', 'input', function (e) {
        $body.removeClass('fixfixed');
      });
  }
  $(window).scroll(function (event) {
    didScroll = true;
    if ($(".navigation_control").hasClass("menu-show")) {
      $(".navigation_control").removeClass("menu-show");
    }
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.warning_area').css('top', '0');
      $('.site_header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.warning_area').css('top', '80px');
        $('.site_header').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }
  $('.widget .module_listitem').addClass('hide');
  $('#' + sfNodeId).removeClass('hide');
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