var mainModule = (function () {
	var init = _listeners();

	function _listeners() {
		$('.address', '.header').on('click', _showYaMap);
		$('#showYaMap', '.header').on('click', _showYaMap);
		$('.pagination__link').on('click', _pagination);

		console.log($('#samurai').text());
	}

	function _showYaMap(e) {
		e.preventDefault;
		$('#yaMap').slideToggle(300);
	}

	function _pagination() {
		event.preventDefault();
		console.log($(this).text());
	}

	return {
		init: init
	}
})();