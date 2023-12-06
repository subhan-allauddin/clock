let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let Day = document.getElementById("Day");


setInterval(()=>{
    let currentTime = new Date();
Day.innerHTML = currentTime.getDay();
hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
},1000)




