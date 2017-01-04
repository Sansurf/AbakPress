/* Верхний слайдер */

var topCarousel = document.getElementById('top_carousel');
var topCarouselUl = document.getElementById('top_carousel_ul');
var topCarouselLl = document.getElementsByClassName('top_carousel_li');

var width = 127 // ширина изображения
var position = -127; // начальный отступ слева
var counter = 0; // счетчик нажатий на стрелку вправо

for (var i=1; i<9; i++) {
	var newLi = document.createElement('li');
		newLi.className = "top_carousel_li";
		newLi.innerHTML = "<img src='images/disks/"+i+".jpg' width='110' height='100'>";
		topCarouselUl.appendChild(newLi);
}

topCarouselUl.style.width = topCarouselLl.length*width + width*2 + 'px';

var firstLi = topCarouselUl.firstChild;


// сдвиг вправо
topCarousel.querySelector('.arrow-left').onclick = function() {
  topCarouselUl.style.marginLeft = -254 + 'px';
  var lastLi = topCarouselUl.lastChild;
  var liAdd = lastLi.cloneNode(true);
	topCarouselUl.insertBefore(liAdd, topCarouselUl.firstChild);
  // position = position + width;
  lastLi.remove();
	topCarouselUl.style.marginLeft = -127 + 'px';
};

// сдвиг влево
topCarousel.querySelector('.arrow-right').onclick = function() {
	var counterLi = topCarouselUl.getElementsByClassName('top_carousel_li').item(counter);
	var liAdd = counterLi.cloneNode(true);
	topCarouselUl.appendChild(liAdd);
  position = position - width;
  topCarouselUl.style.marginLeft = position + 'px';
  counter++;
};

/* /Верхний слайдер */


/* Выбор города */

var list_cities = ["Астрахань", "Воронеж", "Нижний Новгород",
	"Новосибирск", "Краснодар", "Ростов", "Самара", "Уфа", "Казань",
	"Пермь", "Красноярск", "Омск", "Волгоград", "Ханты-Мансийск",
	"Москва", "Санкт-Петербург", "Екатеринбург", "Тюмень", "Челябинск"
];

var listCitiesUl = document.getElementById('dropdown');

function down() {
		if (listCitiesUl.style.display == 'none')
			listCitiesUl.style.display = 'block';
		else
			listCitiesUl.style.display = 'none';
}

for(i=0; i<list_cities.length; i++) {
	var newLi = document.createElement('li');
	var newA = document.createElement('a');
		newA.setAttribute('onclick', 'setCity("'+list_cities[i]+'")');
		newA.href = '#';
		newA.innerHTML = list_cities[i];
	newLi.appendChild(newA);
	listCitiesUl.appendChild(newLi);
}

function setCity(city) {
	listCitiesUl.style.display = 'none';
	var choosedCity = document.getElementById('choosed_city');
	choosedCity.innerHTML = city;
}

/* /Выбор города */
