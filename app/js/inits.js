(function () {
	$(document).ready(function () {

		//Элементы страницы
		var checkedInputs = $('input[checked]', '.left-block'),
			radios = $('input[type=radio]', '.available'),
			sliderImg = $('.model__slider-img', '.model'),
			selector = $('.selector', '.filter'),
			viewLink = $('.filter__view-link'),
			sliderRange = $('#sliderRange'),
			column = $('.content__info');
		
		//Фильтр слева
		_checkElem(radios, filter.init, 'NO LEFT FILTER');

		//Колумнайзер
		_checkElem(column, columnsModule.init, 'NO COLUMNS');
		
		//Переключение вида отображения моделей
		_checkElem(viewLink, viewModule.init, 'NO VIEW MODIFIER');
		
		//Слайдер фотографий моделей
		_checkElem(sliderImg, modelSlider.init, 'NO MODEL SLIDER');

		//Селект в блоке переключения вида отображения моделей
		_checkElem(selector, selectModule.init, 'NO SELECT IN VIEW');

		//Слайдер цен слева
		_checkElem(sliderRange, sliderModule.init, 'NO RANGE SLIDER');


		//Функция проверки элементов на странице
		function _checkElem(elem, modInit, message) {
			if(elem.length > 0) {
				modInit();
			}
			else {
				console.log(message);
			}
		}
	});
})();