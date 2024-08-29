import { Clock } from "./clock.js";

const breakSlider = document.getElementById("break-slider");
const workSlider = document.getElementById("work-slider");
const breakText = document.getElementById("break-slider-value");
const workText = document.getElementById("work-slider-value");

let config = {
    work: workSlider.value,
    break: breakSlider.value,
};

breakText.textContent = `${breakSlider.value} minutes`;
workText.textContent = `${workSlider.value} minutes`;

breakSlider.oninput = function() {
    breakText.textContent = `${this.value} minutes`;
}

workSlider.oninput = function() {
    workText.textContent = `${this.value} minutes`;
}

function startTimer() {
    const label = document.getElementById("clock-label");
    label.textContent = 'TEST';
}


window.onload = function () {
    document.getElementById('short-timer').addEventListener('click', (e) => {
        workText.textContent = '25 minutes';
        workSlider.value = 25;
        breakText.textContent = '5 minutes';
        breakSlider.value = 5;
    });
    document.getElementById('long-timer').addEventListener('click', (e) => {
        workText.textContent = '50 minutes';
        workSlider.value = 50;
        breakText.textContent = '10 minutes';
        breakSlider.value = 10;
    });
    document.getElementById('start-timer').addEventListener('click', startTimer);

    const clock = new Clock();
}





