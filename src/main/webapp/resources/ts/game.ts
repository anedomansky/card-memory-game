import '../scss/game.scss';
import createGame from './createGame';

interface CardGame {
    startTimer: () => void;
    clearTimer: () => void;
    incrementMoves: () => void;
    reloadBtn: HTMLElement | null;
    backBtn: HTMLElement | null;
    getCards: () => Element[];
    setShownElements: (elements: number) => void;
    getShownElements: () => number;
}

const cardGame = createGame({ timerElementId: 'timer', moveCounterElementId: 'moves', reloadBtnId: 'reload', backBtnId: 'back', cardClass: 'content__btn' }) as CardGame;

interface GameLogic {
    startGame: () => void;
}

type Game = CardGame & GameLogic;

const setupGameLogic = (): Game => {
    let matches = 0;
    const neededMatches = cardGame.getCards().length;

    const toggleClasses = (btnWithImg: Element) => {
        btnWithImg.classList.add('btn--show');
        btnWithImg.children[0].classList.add('img--show');

        cardGame.incrementMoves();

        cardGame.setShownElements(cardGame.getShownElements() + 1);

        if (cardGame.getShownElements() === 2) {
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

            cardGame.setShownElements(0);
        }

        if (matches === neededMatches) {
            cardGame.clearTimer();
            document.querySelector('.win')?.classList.add('win--show');
        }
    };

    return {
        ...cardGame,
        startGame() {
            cardGame.getCards().forEach((btn) => btn.addEventListener('click', () => toggleClasses(btn)));
            cardGame.startTimer();
        },
    };
};

setupGameLogic().startGame();
