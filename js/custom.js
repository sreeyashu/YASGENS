$(document).ready(function() {
	
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
