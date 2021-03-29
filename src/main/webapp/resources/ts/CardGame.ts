import { GameProps } from './interfaces/GameProps';
import MoveCounter from './withMoveCounter';
import Navigation from './withNavigation';
import Timer from './withTimer';

class CardGame {
    private navigation: Navigation;

    private timer: Timer;

    private moveCounter: MoveCounter;

    private shownElements: number;

    private matches: number;

    private buttons: Element[];

    private neededMatches: number;

    constructor(gameProps: GameProps) {
        this.navigation = new Navigation(gameProps.reloadBtnId, gameProps.backBtnId);
        this.timer = new Timer(gameProps.timerId);
        this.moveCounter = new MoveCounter(gameProps.moveCounterId);
        this.shownElements = 0;
        this.matches = 0;
        this.buttons = Array.from(document.getElementsByClassName(gameProps.cardClass));
        this.neededMatches = this.buttons.length;
    }

    private toggleClasses(btnWithImg: Element) {
        btnWithImg.classList.add('btn--show');
        btnWithImg.children[0].classList.add('img--show');

        this.moveCounter.increment();

        this.shownElements += 1;

        if (this.shownElements === 2) {
            const visibleCards = Array.from(document.getElementsByClassName('btn--show'));
            const firstCard = visibleCards[0].children[0] as HTMLImageElement;
            const secondCard = visibleCards[1].children[0] as HTMLImageElement;
            visibleCards.forEach((btn) => {
                if (firstCard.alt === secondCard.alt) {
                    btn.removeEventListener('click', () => this.toggleClasses(btn));
                    btn.classList.replace('btn--show', 'match');
                    this.matches += 1;
                } else {
                    setTimeout(() => {
                        btn.classList.remove('btn--show');
                        btn.children[0].classList.remove('img--show');
                    }, 500);
                }
            });

            this.shownElements = 0;
        }

        if (this.matches === this.neededMatches) {
            this.timer.clear();
            document.querySelector('.win')?.classList.add('win--show');
        }
    }

    public start(): void {
        this.buttons.forEach((btn) => btn.addEventListener('click', () => this.toggleClasses(btn)));
        this.timer.start();
    }
}

export default CardGame;
