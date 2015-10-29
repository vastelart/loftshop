var viewModule = (function () {
	var init = _view;

	var viewLink = $('.filter__view-link');
	var models = $('.model');

	function _view() {
		viewLink.on('click', function(event) {
			event.preventDefault();
			var view = $(this).data('view');

			models.each(function() {
				$(this).attr('class', '');
				$(this).addClass('model model_view-' + view);
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