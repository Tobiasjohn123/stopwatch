const start = document.querySelector(".start");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const mili = document.querySelector(".milli");

 let min = 0
 let sec = 0
 let milisec = 0
 let interval;

 const starTime = ()=>{
    milisec++
    if(milisec <= 9)
    {
        mili.innerHTML =  "0" + milisec
    }
    if(milisec > 9)
    {
        mili.innerHTML = milisec
    }
    if(milisec > 99)
    {
        sec++
        seconds.innerHTML = "0" + sec
        milisec = 0
        mili.innerHTML = "0" + 0
    }
    if (sec > 9 )
    {
       seconds.innerHTML =   sec
    }
    if(sec >= 60)
    {
        min++
        minute.innerHTML = "0" + min
        sec = 0
        seconds.innerHTML =  "0" + 0

    }
 }

 start.addEventListener("click", function(){
    interval = setInterval(starTime,10)
})
