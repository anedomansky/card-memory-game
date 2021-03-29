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

}

const createGame = ({}: Props) => pipe(

)({});
