var selectModule = (function () {
	var init = _select;

	function _select() {
		$(window).on('load', function() {
			$('#sortFormSelect').select2();
		});

		console.log('SELECT');
	}

	return {
		init: init
	}
})();

selectModule.init();