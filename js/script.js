// Выпадающий список городов

var list_cities = ["Астрахань", "Воронеж", "Нижний Новгород",
	"Новосибирск", "Краснодар", "Ростов", "Самара", "Уфа", "Казань",
	"Пермь", "Красноярск", "Омск", "Волгоград", "Ханты-Мансийск",
	"Москва", "Санкт-Петербург", "Екатеринбург", "Тюмень", "Челябинск"
];

var ul = document.getElementById('dropdown');

for(i=0; i<list_cities.length; i++) {
	var newLi = document.createElement('li');
	var newA = document.createElement('a');
		newA.setAttribute('onclick', 'setCity("'+list_cities[i]+'")');
		newA.href = '#';
		newA.innerHTML = list_cities[i];
	newLi.appendChild(newA);
	ul.appendChild(newLi);
}

function setCity(city) {
	ul.style.display = 'none';
	var choosedCity = document.getElementById('choosed_city');
	choosedCity.innerHTML = city;
}

function down() {
	if (ul.style.display == 'none')
		ul.style.display = 'block';
	else
		ul.style.display = 'none';
}