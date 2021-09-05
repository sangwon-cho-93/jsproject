const clock=document.querySelector(".clock");
const todayDate=document.querySelector(".date");
const daysArray=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function handleDateClock (){
    const now = new Date();
    const year=now.getFullYear();
    const month=String(now.getMonth()+1).padStart(2,"0");
    const dates=String(now.getDate()).padStart(2,"0");
    const day=daysArray[now.getDay()];
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    todayDate.innerText=`${year}. ${month}. ${dates}. ${day}.`;
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
handleDateClock();
setInterval(handleDateClock,1000);