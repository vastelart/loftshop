var phones = (function() {
	var init = _setUpListeners();
	
	function _setUpListeners() {
		var heading = $('.content-heading', '.left-block');

		heading.on('click', _accordeon);
		heading.on('hover', _arrow);
	}

	function _accordeon() {
		$(this).next('.cooltech-accordeon').stop(true, true).slideToggle(300);
		$(this).find('.heading-arrow').toggleClass('invert');

		console.log('ACCORDEON');
	}

	function _arrow() {
		$(this).find('.heading-arrow').stop(true, true).fadeToggle(300);
	}

	return {
		init: init
	}
})();