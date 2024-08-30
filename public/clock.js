export class Clock {

    constructor() {
        this.seconds = 0;
        this.rounds = 0;
        this.mode = 1;
        this.longBreak = false;
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

    getRounds() {
        return this.rounds;
    }

    resetRounds() {
        this.rounds = 0;
    }

    increaseRounds() {
        this.rounds += 1;
    }

    setLongBreak(val) {
        this.longBreak = val;
    }

    getLongBreak() {
        return this.longBreak;
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
