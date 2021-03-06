import '../scss/game.scss';

const toggleClasses = (btnWithImg: Element) => {
    btnWithImg.classList.toggle('btn--show');
    btnWithImg.children[0].classList.toggle('img--show');
};

const buttons = Array.from(document.getElementsByClassName('content__btn'));

buttons.forEach((btn) => btn.addEventListener('click', () => toggleClasses(btn)));
