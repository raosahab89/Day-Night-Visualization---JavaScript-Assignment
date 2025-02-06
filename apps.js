const timeView = document.getElementById("watch");

setInterval(() => {
    let displayTime = new Date();
    timeView.innerHTML = displayTime.toLocaleTimeString();
},1000)

const newTime = new Date();
const time = newTime.getHours();
const setHoursNoon = newTime.setTime(19);
const setHoursMorning = newTime.setTime(7);

if (time >= setHoursNoon) {
    const morningImage = document.getElementsByTagName("img");
    morningImage[0].setAttribute("src", "./moon.png");
    const backc = document.getElementsByTagName("body")
    backc[0].style.backgroundColor = "#778da9"
    const mode = document.getElementsByTagName("h1")
    mode[0].innerHTML= "NIGHT MODE"
}
else if (time >= setHoursMorning) {
    const dayImage = document.getElementsByTagName("img");
    dayImage[0].setAttribute("src", "./sun.png");
    const backc = document.getElementsByTagName("body")
    backc[0].style.backgroundColor = "#ffba08"
    const mode = document.getElementsByTagName("h1")
    mode[0].innerHTML= "MORNING MODE"
}
