var modelSlider = (function () {
	var init = _modelSlider;

	function _modelSlider() {

		$(window).on('load', function() {
			$('.model__slider-item:first-child', '.model').addClass('model__slider-item_active');
		});


		$('.model__slider-img', '.model').on('click', _setImage);

		function _setImage() {
			var that = $(this),
				container = that.parents('.model'),
				fullImg = container.find('.model__slider-img_full'),
				newSrc = that.attr('src');

			fullImg.attr('src', newSrc);
			that.parents('.model__slider').find('.model__slider-item').removeClass('model__slider-item_active');
			that.parent().addClass('model__slider-item_active');
		}

		console.log('MODEL SLIDER');
	}

	return {
		init: init
	}
})();

modelSlider.init();