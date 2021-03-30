interface Props {
    elementId: string;
}

const withTimer = ({ elementId }: Props) => (o: Record<string, unknown>) => {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timeInterval: NodeJS.Timeout | null = null;
    const timer = document.getElementById(elementId);

    return {
        ...o,
        startTimer() {
            timeInterval = setInterval(() => {
                seconds += 1;

                if (seconds === 60) {
                    seconds = 0;
                    minutes += 1;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours += 1;
                }
                timer!.innerHTML = `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`} h`;
            }, 1000);
        },
        clearTimer() {
            if (timeInterval) {
                clearInterval(timeInterval);
            }
        },
    };
};

export default withTimer;
