// CLOCK TESTS
import {Clock} from '../public/clock.js';
const testClock = new Clock();

console.log(testClock.seconds);
console.log(testClock.rounds);

testClock.setSeconds(120);
console.log(testClock.seconds);
const timeObject = testClock.getTimeRemaining();
console.log(`${timeObject.minutes}:${timeObject.seconds}`);
testClock.tick();
testClock.tick();
testClock.tick();
testClock.tick();
testClock.tick();
testClock.tick();
testClock.tick();
testClock.tick();
testClock.tick();
const timeObject2 = testClock.getTimeRemaining();
console.log(`${timeObject2.minutes}:${timeObject2.seconds}`);