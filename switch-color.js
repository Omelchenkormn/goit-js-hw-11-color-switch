const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    colorBody: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const startChangeColor = (color) => {
    refs.colorBody.style.backgroundColor = color;
};

let timeColorChange = null;
const start = () => { 
    timeColorChange = setInterval(randomNumber => {
    randomNumber = randomIntegerFromInterval(0, 5);
        startChangeColor(colors[randomNumber]);
        
    }, 1000);
    refs.stopButton.removeAttribute('disabled');
    refs.startButton.setAttribute('disabled', true);
};

const stop = () => {
  clearInterval(timeColorChange);
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', true);
}

refs.startButton.addEventListener('click', start);
refs.stopButton.addEventListener('click', stop);




