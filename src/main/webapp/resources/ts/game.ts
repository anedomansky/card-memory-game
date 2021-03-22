import '../scss/game.scss';
import CardGame from './CardGame';
import { GameProps } from './interfaces/GameProps';

const gameProps: GameProps = {
    reloadBtnId: 'reload',
    backBtnId: 'back',
    timerId: 'timer',
    moveCounterId: 'moves',
    cardClass: 'content__btn',
};

const game = new CardGame(gameProps);

game.start();
