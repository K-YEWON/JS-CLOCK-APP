const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const miunutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${miunutes < 10 ? `0${miunutes}` : miunutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
}

function init() {
    getTime();
    setInterval(getTime, 1000); //일정한 시간 간격으로 작업을 수행 setInterval(함수명, 실행시간);
}

init();