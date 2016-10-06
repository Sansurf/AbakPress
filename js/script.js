// Выпадающий список городов

var list_cities = ["Екатеринбург", "Астрахань", "Воронеж", "Нижний Новгород", "Новосибирск"];
var ul = document.getElementById('dropdown');

for (i=0; i<list_cities.length; i++) {
	
	var newLi = document.createElement('li');
	newLi.setAttribute('id', 'li_city');
	ul.appendChild(newLi);
}

for (i=0; i<list_cities.length; i++) {

	var newA = document.createElement('a');
	newA.setAttribute('onclick', 'setCity()');
	newA.href = '#';
	newA.appendChild(document.createTextNode(list_cities[i]));
	liElements = ul.getElementsByTagName('*');
	liElements[i].appendChild(newA);
}

function setCity() {

}

function down() {
	
	if (ul.style.display == 'none')
		ul.style.display = 'block';
	else
		ul.style.display = 'none';
}