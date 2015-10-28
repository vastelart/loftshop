var filter = (function () {

	var init = _listeners,
		labels = $('label', '.left-block'),
		checkedInputs = $('input[checked]', '.left-block'),
		radios = $('input[type=radio]', '.available');

	function _listeners() {

		//При полной загрузке проверяем наличие заранее прочеканых полей
		$(window).load(function() {
			checkedInputs.each(_firstCheck);
			console.log('LEFT FILTER');
		});

		//При клике по лейблу присваиваем ему класс 'active' - типа, поле прочекано
		labels.on('click', _checkThat);

		//Сбрасываем фильтр
		$('.filter-reset').on('click', _resetFilter);

		//Чек радиобаттонов блока "Наличие в магазинах"
		radios.on('change', _checkRadio);

	};

	function _firstCheck() {
		var labelClass = $(this).parent().attr('class');
		var labelClassActive = labelClass + '_active';

		$(this).parent().addClass(labelClassActive);
	}

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

	function _checkRadio() {
		radios.each(function() {
			var that = $(this);

			if(that.attr('checked')) {
				that.parent().addClass('available__label_active');
			}
			else {
				that.parent().removeClass('available__label_active');
			}
		});
	}



	return {
		init: init
	}
})();

filter.init();