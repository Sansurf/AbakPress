
var width = 127; // ширина изображения

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

// сдвиг влево
carousel.querySelector('.arrow-left').onclick = function() {
  position = position + width;
  list.style.marginLeft = position + 'px';
};

// сдвиг вправо
carousel.querySelector('.arrow-right').onclick = function() {
  position = position - width;
  list.style.marginLeft = position + 'px';
};