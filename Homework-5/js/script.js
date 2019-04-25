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

function changeTitle() {
    let title = document.getElementById('title');
    title.innerText = 'Мы продаем только подлинную технику Apple';
};

changeTitle();

function deleteAdvertizing() { 
    let adv = document.getElementsByClassName('adv');
    adv[0].remove();
}

deleteAdvertizing();

function askUser() {
    let ask = prompt('Ваше отношение к технике Apple? ', '');
    let pr = document.getElementById('prompt');
    pr.innerText = ask;
};

askUser();