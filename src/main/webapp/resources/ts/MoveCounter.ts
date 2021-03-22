class MoveCounter {
    private moves: number;

    private counter: HTMLElement | null;

    constructor(elementId: string) {
        this.moves = 0;
        this.counter = document.getElementById(elementId);
    }

    public increment(): void {
        this.moves += 1;
        this.counter!.innerText = `${this.moves} Move(s)`;
    }
}

export default MoveCounter;
