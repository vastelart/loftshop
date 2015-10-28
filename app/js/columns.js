var columnsModule = (function () {
	var init  = _column;

	function _column() {
		$(window).on('load', function() {
			$('.content__info-column_left').columnize({
				columns: 1
			});
		});

		console.log('COLUMNS');
	}

	return {
		init: init
	}
})();

columnsModule.init();