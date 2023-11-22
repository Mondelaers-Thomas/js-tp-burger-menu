function burgerMenu() {
    document.documentElement.classList.add('js-enabled');
    document.querySelector('.nav-button').addEventListener('click', e => {
        let classMain = document.querySelector('main');
        classMain.classList.toggle('is-opened');
    });
}
burgerMenu();

