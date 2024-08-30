export class Clock {

    constructor() {
        this.seconds = 0;
        this.rounds = 0;
    }

    setSeconds(seconds) {
        this.seconds = seconds;
    }

    getSeconds() {
        return this.seconds;
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
