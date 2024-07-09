let three = document.querySelector('#menu_threeline');
let cross = document.querySelector('#menu_cross');
let menu = document.querySelector('#nav_right');

three.addEventListener("click", function () {
    three.classList.toggle('menu_threeline');
    three.classList.toggle('not_display');
    cross.classList.toggle('menu_threeline');
    menu.classList.toggle('nav_right_side');
    menu.classList.toggle('nav_right');
});

cross.addEventListener("click", function () {
    three.classList.toggle('menu_threeline');
    three.classList.toggle('not_display');
    cross.classList.toggle('menu_threeline');
    menu.classList.toggle('nav_right_side');
    menu.classList.toggle('nav_right');
});

