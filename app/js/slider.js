var sliderModule = (function() {
	var init = _listener;

	function _listener() {
		$(window).on('load', _slider());
	}

	function _slider() {
		var minVal = $('.price__filter-input[name=from]', '.price').attr('value'),
			maxVal = $('.price__filter-input[name=to]', '.price').attr('value'),
			startVal = $('.price__filter-input[name=from]', '.price'),
			endVal = $('.price__filter-input[name=to]', '.price');

		$('#sliderRange').slider({
			range: true,
			min: 1,
			max: maxVal,
			values: [ minVal, maxVal ],
			slide: function(event, ui) {
				startVal.val(ui.values[0]);
				endVal.val(ui.values[1]);
			}
		});

		startVal.on('change', function() {
			$('#sliderRange').slider('values', 0, $(this).val());
		});

		endVal.on('change', function() {
			$('#sliderRange').slider('values', 1, $(this).val());
		});

		console.log('SLIDER');
	}

	return {
		init: init
	}
})();