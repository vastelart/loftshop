(function () {
	$(document).ready(function () {
		var column = $('.content__info');
		if(column.length > 0) {
			columnsModule.init();
		}
		else {
			console.log('NO COLUMNS');
		}
		filter.init();
		modelSlider.init();
		selectModule.init();
		sliderModule.init();
	});
})();