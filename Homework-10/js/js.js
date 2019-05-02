let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + Number(age));
}
showUser('Yehorov', 'Oleksandr');