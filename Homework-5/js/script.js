function fifthElement(){
    let menu = document.getElementsByClassName('menu');
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Пятый пункт';
    newLi.classList.add('menu-item');
    menu[0].appendChild(newLi);
};

fifthElement();

function changeImage() {
    let image = document.getElementsByTagName('body');
    image[0].style.background = 'url(img/apple_true.jpg) center no-repeat';
};

changeImage();