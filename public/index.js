const breakSlider = document.getElementById("break-slider");
const workSlider = document.getElementById("work-slider");
const breakText = document.getElementById("break-slider-value");
const workText = document.getElementById("work-slider-value");

let timer = {
    work: workSlider.value,
    break: breakSlider.value,
    round: 1
};

breakText.textContent = breakSlider.value;
workText.textContent = workSlider.value;

breakSlider.oninput = function() {
    breakText.textContent = this.value;
}

workSlider.oninput = function() {
    workText.textContent = this.value;
}

function startTimer() {
    const label = document.getElementById("clock-label");

    (timer.round % 2 === 0) ? label.textContent = "BREAK" :  label.textContent = "WORK";


}


window.onload = function () {
    document.getElementById('short-timer').addEventListener('click', (e) => {
        workText.textContent = '25';
        workSlider.value = 25;
        breakText.textContent = '5';
        breakSlider.value = 5;
    });
    document.getElementById('long-timer').addEventListener('click', (e) => {
        workText.textContent = '50';
        workSlider.value = 50;
        breakText.textContent = '10';
        breakSlider.value = 10;
    });
    document.getElementById('start-timer').addEventListener('click', startTimer);

}





