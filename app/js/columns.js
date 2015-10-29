var columnsModule = (function () {
	var init  = _column;

	function _column() {
		$('.content__info').columnize({columns: 2});

		console.log('COLUMNS');
	}

	return {
		init: init
	}
})();