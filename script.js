var menu = document.querySelector('.menu');

menu.addEventListener('click', function (event) {
    var element = event.target;

    // нажимаем на заголовок с классом menu-title
    if (element.classList.contains('menu-title')) {
        var menuList = element.nextElementSibling;

        menuList.classList.toggle('menu-list-show');
    }
});
