import withCards from './withCards';
import withMoveCounter from './withMoveCounter';
import withNavigation from './withNavigation';
import withTimer from './withTimer';

const withConstructor = <T>(constructor: T) => (o: Record<string, unknown>) => ({
    // create the delegate [[Prototype]]
    __proto__: {
        // add the constructor prop to the new [[Prototype]]
        constructor,
    },
    // mix all o's props into the new object
    ...o,
});

const pipe = (...fns: ((o: Record<string, unknown>) => Record<string, unknown>)[]) => (x: Record<string, unknown>) => fns.reduce((y, f) => f(y), x);

interface Props {
    timerElementId: string;
    moveCounterElementId: string;
    reloadBtnId: string;
    backBtnId: string;
    cardClass: string;
}

const createGame = ({ timerElementId, moveCounterElementId, reloadBtnId, backBtnId, cardClass }: Props) => pipe(
    withTimer({ elementId: timerElementId }),
    withMoveCounter({ elementId: moveCounterElementId }),
    withNavigation({ reloadBtnId, backBtnId }),
    withCards({ cardClass }),
    withConstructor(createGame),
)({}) as unknown;

export default createGame;
