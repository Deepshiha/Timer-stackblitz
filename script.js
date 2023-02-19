// Import stylesheets
import './style.css';

// Write Javascript code!
const semicircles = document.querySelectorAll(".semicircle")

// input 
const hr = 0
const min = 0
const sec = 10



function getMilliseconds(hr, min, sec){
  const hrToMilli = hr * 60 * 60 * 1000
  const minToMilli = min * 60 * 1000
  const secToMilli = sec * 1000

  const timeInMilli = hrToMilli + minToMilli + secToMilli

  return timeInMilli

}

function getFutureTime(timeInMilli){
  return Date.now() + timeInMilli
}


const numOfMilli = getMilliseconds(hr, min, sec)
const futureTime = getFutureTime(numOfMilli)

const timerLoop = setInterval(countDownTimer, 1000);
countDownTimer()

function countDownTimer(){
  const currentTime = Date.now()
  const remainingTime= futureTime - currentTime
  const angle = remainingTime / numOfMilli * 360 
  if (angle > 180){
    semicircles[2].style.display = "none"
    semicircles[0].style.transform = "rotate(180deg)"
    semicircles[1].style.transform = `rotate(${angle}deg)`
  } else {
    semicircles[2].style.display = "block"
    semicircles[0].style.transform = `rotate(${angle}deg)`
    semicircles[1].style.transform = `rotate(${angle}deg)`
  }

}