class Timer {
    private seconds: number;

    private minutes: number;

    private hours: number;

    private timeInterval: NodeJS.Timeout | null;

    private timer: HTMLElement | null;

    constructor(elementId: string) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.timer = document.getElementById(elementId);
        this.timeInterval = null;
    }

    public start(): void {
        this.timeInterval = setInterval(() => {
            this.seconds += 1;

            if (this.seconds === 60) {
                this.seconds = 0;
                this.minutes += 1;
            }
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
            }
            this.timer!.innerHTML = `${this.hours > 9 ? this.hours : `0${this.hours}`}:${this.minutes > 9 ? this.minutes : `0${this.minutes}`}:${this.seconds > 9 ? this.seconds : `0${this.seconds}`} h`;
        }, 1000);
    }

    public clear(): void {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    }
}

export default Timer;
