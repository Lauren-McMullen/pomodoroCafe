export class Clock {

    constructor() {
        this.seconds = 0;
        this.rounds = 0;
        this.mode = 1;
    }

    setSeconds(seconds) {
        this.seconds = seconds;
    }

    setMode(mode) {
        this.mode = mode;
    }

    getSeconds() {
        return this.seconds;
    }

    getMode() {
        return this.mode;
    }

    increaseRounds() {
        this.rounds += 1;
    }

    tick() {
        this.seconds--;
        if(this.seconds < 0) {
            this.seconds = 0;
        }
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
