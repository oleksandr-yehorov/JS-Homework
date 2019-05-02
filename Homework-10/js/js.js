
//let age = document.getElementById('age');

function getValue(){
    var age = document.getElementById("submit");
    alert(age.value);
    return age.value;
  };
function showUser(surname = 'Yehorov', name = 'Olekandr') {
	console.log("Пользователь " + surname + " " + name + ", его возраст " + getValue());
};

showUser();