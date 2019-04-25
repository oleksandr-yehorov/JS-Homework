function fifthElement(){
    let menu = document.getElementsByClassName('menu');
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Пятый пункт';
    newLi.classList.add('menu-item');
    menu[0].appendChild(newLi);
}

fifthElement();