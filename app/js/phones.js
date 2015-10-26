var phones = (function() {
	var init = _accordeon();

	function _accordeon() {
		var heading = $('.content-heading', '.left-block');

		heading.on('click', function(e) {
			e.preventDefault();
			$(this).next('.cooltech-accordeon').stop(true, true).slideToggle(300);
			$(this).find('.heading-arrow').toggleClass('invert');
		});
		heading.on('hover', function() {
			$(this).find('.heading-arrow').stop(true, true).fadeToggle(300);
		});

		console.log('ACCORDEON');
	}

	return {
		init: init
	}
})();