var selectModule = (function () {
	var init = _listeners;
	var selector = $('.selector', '.filter');
	var selectItem = $('.select-item', '.sort-form__select');
	var selectedItem = _findSelected;
	var selectorOptions = $('.selector__options', '.filter');

	function _listeners() {
		$(window).on('load', _select);
		selector.on('click', _toggleOptions);
	}

	function _select() {
		selector.prepend(selectedItem);

		selectItem.each(function () {
			var txt = $(this).text();
			selectorOptions.append('<a href="#" class="selector__link">' + txt + '</a>');
		});

		var selectorLink = $('.selector__link', '.selector__options');
		var optionsWidth = selectorOptions.width();

		selector.width(optionsWidth + 15);
		selectorOptions.width(optionsWidth + 15);
		
		console.log(optionsWidth);

		selectorLink.click(function (event) {
			event.preventDefault();
			var txt = $(this).text();

			selector.text(txt);
			selectorOptions.slideUp(300);
		});
	}

	function _findSelected() {
		var txt = $('option[selected]', '.sort-form__select').text();
		return txt;
	}

	function _toggleOptions() {
		selectorOptions.slideToggle(300);
	}

	return {
		init: init
	}
})();