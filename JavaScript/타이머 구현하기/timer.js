const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

const btnStart = document.querySelector('.start')
const btnReset = document.querySelector('.reset')

// 시간 입력 시 버튼 활성화 - 타이머 시작 준비
function startTimer() {
  btnStart.querySelector('img').src = './img/icon-start.png'
  btnStart.disabled = false
  btnStart.classList.add('active')
  btnReset.querySelector('img').src = './img/icon-reset.png'
  btnReset.classList.add('active')
  btnReset.disabled = false
}

hour.addEventListener('keypress', startTimer)
minute.addEventListener('keypress', startTimer)
second.addEventListener('keypress', startTimer)

// 타이머 동작 
function runTimer() {
  // START -> PAUSE
  if (btnStart.textContent.trim() === 'START') {
    btnStart.style.backgroundColor = '#15C2B8'
    btnStart.innerHTML = `<img src='./img/icon-stop.png' alt="일시 정지"> PAUSE`
  // PAUSE -> START
  } else {
    btnStart.style.backgroundColor = '#5180FF'
    btnStart.innerHTML = `<img src="./img/icon-start.png" alt="시작"> START`
  }
}

btnStart.addEventListener('click', runTimer)


// 타이머 초기화
function resetTimer() {
  hour.value = '00'
  minute.value = '00'
  second.value = '00'
}

btnReset.addEventListener('click', resetTimer)