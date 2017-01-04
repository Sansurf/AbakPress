var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = document.getElementById('top_carousel_ul');
var firstLi = listElems.firstChild;

var width = 127; // ширина изображения
var position = -127; // начальный отступ слева
var counter = 0; // счетчик нажатий на стрелку вправо

// сдвиг вправо
carousel.querySelector('.arrow-left').onclick = function() {
  list.style.marginLeft = -254 + 'px';
  var lastLi = listElems.lastChild;
  var liAdd = lastLi.cloneNode(true);
	listElems.insertBefore(liAdd, listElems.firstChild);
  // position = position + width;
  lastLi.remove();
	list.style.marginLeft = -127 + 'px';
};

// сдвиг влево
carousel.querySelector('.arrow-right').onclick = function() {
	var counterLi = listElems.getElementsByClassName('top_carousel_li').item(counter);
	var liAdd = counterLi.cloneNode(true);
	listElems.appendChild(liAdd);
  position = position - width;
  list.style.marginLeft = position + 'px';
  counter++;
};