const menuBtn = document.querySelector('.menu-btn');
let menuOpened = false;

function openMenu() {
    if(!menuOpened) {
        menuBtn.classList.add('open');
        tDrop.classList.add('anime-drop');
        menuOpened = true;
    } else {
        menuBtn.classList.remove('open');
        tDrop.classList.remove('anime-drop');
        menuOpened = false;
    }
};

function closeMenu() {
    menuBtn.classList.remove('open');
    tDrop.classList.remove('anime-drop');
    menuOpened = false;
}