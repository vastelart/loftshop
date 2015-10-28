var filter = (function () {

	var init = _listeners,
		labels = $('label', '.left-block');

	function _listeners() {

		//При полной загрузке проверяем наличие заранее прочеканых полей
		$(window).load(function() {
			labels.each(_checkThat);
		});

		//При клике по лейблу присваиваем ему класс 'active' - типа, поле прочекано
		labels.on('click', _checkThat);

		//Сбрасываем фильтр
		$('.filter-reset').on('click', _resetFilter);
	};

	function _checkThat() {
		var that = $(this),
			inputt = that.find('input'),
			labelClass = that.attr('class').replace('_active', ''),
			labelClassActive = labelClass + '_active';

			if(inputt.attr('checked')) {
				that.addClass(labelClassActive);
			}
			else {
				that.removeClass(labelClassActive);
				that.attr('class', labelClass);
			}
	}

	function _resetFilter() {
		event.preventDefault();
		var inputs = $(this).parent().find('input'),
			labels = $('label', $(this).parent());
		inputs.each(function() {
			$(this).removeAttr('checked');
		});

		labels.each(_checkThat);
	}

	return {
		init: init
	}
})();

filter.init();