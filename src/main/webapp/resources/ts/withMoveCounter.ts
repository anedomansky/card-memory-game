interface Props {
    elementId: string;
}

const withMoveCounter = ({ elementId }: Props) => (o: Record<string, unknown>) => {
    let moves = 0;
    const counter = document.getElementById(elementId);

    return {
        ...o,
        increment() {
            moves += 1;
            if (counter) {
                counter.innerText = `${moves} Move(s)`;
            }
        },
    };
};

export default withMoveCounter;
