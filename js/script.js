/* Верхний слайдер */

var topCarouselUl = document.getElementById('top_carousel_ul');

for (i=1; i<8; i++) {
	var newLi = document.createElement('li');
		newLi.href = "#";
		newLi.className = "top_carousel_li";
		newLi.innerHTML = "<img src='images/disks/"+i+".jpg' width='110' height='100'>";
		topCarouselUl.appendChild(newLi);
}


/* Выпадающий список городов */

var list_cities = ["Астрахань", "Воронеж", "Нижний Новгород",
	"Новосибирск", "Краснодар", "Ростов", "Самара", "Уфа", "Казань",
	"Пермь", "Красноярск", "Омск", "Волгоград", "Ханты-Мансийск",
	"Москва", "Санкт-Петербург", "Екатеринбург", "Тюмень", "Челябинск"
];

var listCitiesUl = document.getElementById('dropdown');

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

function down() {
	if (listCitiesUl.style.display == 'none')
		listCitiesUl.style.display = 'block';
	else
		listCitiesUl.style.display = 'none';
}