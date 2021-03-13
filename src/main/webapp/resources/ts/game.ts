import '../scss/game.scss';

let shownElements = 0;
let matches = 0;

const reloadBtn = document.getElementById('reload');
const backBtn = document.getElementById('back');

const buttons = Array.from(document.getElementsByClassName('content__btn'));

const neededMatches = buttons.length;

const toggleClasses = (btnWithImg: Element) => {
    btnWithImg.classList.add('btn--show');
    btnWithImg.children[0].classList.add('img--show');

    shownElements += 1;

    if (shownElements === 2) {
        const visibleCards = Array.from(document.getElementsByClassName('btn--show'));
        const firstCard = visibleCards[0].children[0] as HTMLImageElement;
        const secondCard = visibleCards[1].children[0] as HTMLImageElement;
        visibleCards.forEach((btn) => {
            if (firstCard.alt === secondCard.alt) {
                btn.removeEventListener('click', () => toggleClasses(btn));
                btn.classList.replace('btn--show', 'match');
                matches += 1;
            } else {
                setTimeout(() => {
                    btn.classList.remove('btn--show');
                    btn.children[0].classList.remove('img--show');
                }, 500);
            }
        });

        shownElements = 0;
    }

    if (matches === neededMatches) {
        document.getElementsByClassName('win')[0].classList.add('win--show');
    }
};

buttons.forEach((btn) => btn.addEventListener('click', () => toggleClasses(btn)));

reloadBtn?.addEventListener('click', () => window.location.reload());

backBtn?.addEventListener('click', () => window.history.back());
