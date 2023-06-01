let sessionLength = document.querySelector('#session-length')
let breakLength = document.querySelector('#break-length')
let timerLabel = document.querySelector('#timer-label')
let playButton = document.querySelector('#start-stop')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

let tid

const audio = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav')
const session = 25
const breakl = 5
let isOn = false

function handleClick(e) {
    const bid = e.target.id
    if(isOn === true) {
      return
    }
    if(bid === "session-increment") {
        if(sessionLength.innerHTML < 60) {
            sessionLength.innerHTML++
            if(timerLabel.innerHTML === 'Session') {
                if(sessionLength.innerHTML < 10) {
                    minutes.innerHTML = '0'+sessionLength.innerHTML
                }
                else {
                    minutes.innerHTML = sessionLength.innerHTML
                }
                seconds.innerHTML = '0'+0
            }
        }
    }

    if(bid === "session-decrement") {
        if(sessionLength.innerHTML > 1) {
            sessionLength.innerHTML--
            if(timerLabel.innerHTML === 'Session') {
                if(sessionLength.innerHTML < 10) {
                    minutes.innerHTML = '0'+sessionLength.innerHTML
                }
                else {
                    minutes.innerHTML = sessionLength.innerHTML
                }
                seconds.innerHTML = '0'+0
            }
        }
    }

    if(bid === "break-increment") {
        if(breakLength.innerHTML < 60) {
            breakLength.innerHTML++
            if(timerLabel.innerHTML === 'Break') {
                if(breakLength.innerHTML < 10) {
                    minutes.innerHTML = '0'+breakLength.innerHTML
                }
                else {
                    minutes.innerHTML = breakLength.innerHTML
                }
                seconds.innerHTML = '0'+0
            }
        }
    }

    if(bid === "break-decrement") {
        if(breakLength.innerHTML > 1) {
            breakLength.innerHTML--
            if(timerLabel.innerHTML === 'Break') {
                if(breakLength.innerHTML < 10) {
                    minutes.innerHTML = '0'+breakLength.innerHTML
                }
                else {
                    minutes.innerHTML = breakLength.innerHTML
                }
                seconds.innerHTML = '0'+0
            }
        }
    }
  }

  function countdown() {
    if(seconds.innerHTML == 0) {
      if(minutes.innerHTML == 0) {
        audio.play()
        if(timerLabel.innerHTML === 'Session') {
        timerLabel.innerHTML = 'Break'
        minutes.innerHTML = breakLength.innerHTML
        seconds.innerHTML = '0'+0
        return
        }
        if(timerLabel.innerHTML === 'Break') {
        timerLabel.innerHTML = 'Session'
        minutes.innerHTML = sessionLength.innerHTML
        seconds.innerHTML = '0'+0
        return
        }
      }

      minutes.innerHTML--
      if(minutes.innerHTML < 10) {
        let min = minutes.innerHTML
        minutes.innerHTML = '0'+min
    }
      seconds.innerHTML = 59
      return
    }
    if(seconds.innerHTML <= 10) {
        let sec = seconds.innerHTML
        seconds.innerHTML = '0'+(sec - 1)
        return
    }
    seconds.innerHTML--
  }

  function handleReset() {
    clearInterval(tid)
    audio.pause()
    timerLabel.innerHTML = 'Session'
    isOn = false
    playButton.innerHTML = 'Start'
    sessionLength.innerHTML = session
    breakLength.innerHTML = breakl
    minutes.innerHTML = session
    seconds.innerHTML = '0'+0
  }

  function handlePlayer() {
    if(isOn === false) {
    tid = setInterval(countdown, 1000)
    isOn = true
    playButton.innerHTML = 'Stop'
      return
    }
    if(isOn === true) {
    isOn = false
    playButton.innerHTML = 'Start'
    clearInterval(tid)
    }
  }