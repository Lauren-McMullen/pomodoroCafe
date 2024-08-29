export class Clock {

    constructor() {
        this.seconds = 0;
        this.rounds = 0;
    }

    setSeconds(seconds) {
        this.seconds = seconds;
    }

    increaseRounds() {
        this.rounds += 1;
    }

    tick() {
        this.seconds--;
    }

    getTimeRemaining() {
        const seconds = this.seconds % 60;
        const minutes = Math.floor(this.seconds / 60);
        return {
            seconds: seconds,
            minutes: minutes
        }
    }

}