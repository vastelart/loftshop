var viewModule = (function () {
	var init = _view;

	var viewLink = $('.filter__view-link');
	var models = $('.model', '.model-wrapper');

	function _view() {
		viewLink.on('click', function(event) {
			event.preventDefault();

			var view = $(this).data('view');

			models.each(function() {
				var that = $(this);

				that.attr('class', '').addClass('model model_view-' + view);
			});

			console.log(view);
		});

		console.log('VIEW MODIFIER');
	}

	return {
		init: init
	}
})();

viewModule.init();