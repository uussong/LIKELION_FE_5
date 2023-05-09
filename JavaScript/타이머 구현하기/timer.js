const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

const btnStart = document.querySelector('.start')
const btnReset = document.querySelector('.reset')

function startTimer() {
  btnStart.querySelector('img').src = './img/icon-start.png'
  btnStart.classList.add('active')
  btnReset.querySelector('img').src = './img/icon-reset.png'
  btnReset.classList.add('active')
}

hour.addEventListener('keypress', startTimer)
minute.addEventListener('keypress', startTimer)
second.addEventListener('keypress', startTimer)