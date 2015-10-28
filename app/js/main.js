var mainModule = (function () {
	var init = _listeners();

	function _listeners() {
		$('.address', '.header').on('click', _showYaMap);
		$('#showYaMap', '.header').on('click', _showYaMap);
	}

	function _showYaMap(e) {
		e.preventDefault;
		$('#yaMap').slideToggle(300);
	}

	return {
		init: init
	}
})();