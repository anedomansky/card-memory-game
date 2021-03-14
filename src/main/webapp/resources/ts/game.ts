import '../scss/game.scss';
import Navigation from './Navigation';
import Timer from './Timer';

const navigation = new Navigation();
navigation.setup();

const timer = new Timer();

let shownElements = 0;
let matches = 0;
let moves = 0;

// own class?
const movesCounter = document.getElementById('moves');

const buttons = Array.from(document.getElementsByClassName('content__btn'));

const neededMatches = buttons.length;

const toggleClasses = (btnWithImg: Element) => {
    btnWithImg.classList.add('btn--show');
    btnWithImg.children[0].classList.add('img--show');

    moves += 1;

    movesCounter!.innerText = `${moves} Move(s)`;

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
        timer.clear();
        document.getElementsByClassName('win')[0].classList.add('win--show');
    }
};

buttons.forEach((btn) => btn.addEventListener('click', () => toggleClasses(btn)));
