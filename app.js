var minDisplay = document.getElementById("min")
var secDisplay = document.getElementById("sec")
var msecDisplay = document.getElementById("msec")
var startBtn = document.getElementById("startBtn")
var interval

var min = 0
var sec = 0
var millisec = 0

function timer() {
  millisec++
  msecDisplay.innerHTML = millisec
  if(millisec >= 100) {
    sec++
    secDisplay.innerHTML = sec
    millisec = 0
  } else if(sec >= 60) {
    min++
    minDisplay.innerHTML = min
    sec = 0
  }
}

function start() {
  interval = setInterval(timer, 10)
  startBtn.disabled = true
}

function stop() {
  clearInterval(interval)
  startBtn.disabled = false
}

function reset() {
  min = 0
  sec = 0
  millisec = 0
  minDisplay.innerHTML = 0
  secDisplay.innerHTML = 0
  msecDisplay.innerHTML = 0
  stop()
  startBtn.disabled = false
}

function record() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.classList.add("li-item")
  var text = document.createTextNode(minDisplay.innerHTML + ":" + secDisplay.innerHTML + ":" + msecDisplay.innerHTML)
  li.appendChild(text);
  ul.appendChild(li);
  stop()
}