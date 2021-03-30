interface Props {
    cardClass: string;
}

const withCards = ({ cardClass }: Props) => (o: Record<string, unknown>) => {
    let shownElements = 0;
    const cards = Array.from(document.getElementsByClassName(cardClass));

    return {
        ...o,
        getCards() {
            return cards;
        },
        setShownElements(elements: number) {
            shownElements = elements;
        },
        getShownElements() {
            return shownElements;
        },
    };
};

export default withCards;
