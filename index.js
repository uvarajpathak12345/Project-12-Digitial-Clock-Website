

let hours_one = document.getElementsByTagName(`p`)[0]
let minute_one = document.getElementsByTagName(`p`)[1]
let second_one = document.getElementsByTagName(`p`)[2]

setInterval(function(){
    let a = new Date()
    let hour = a.getHours();
let minute = a.getMinutes();
let second = a.getSeconds();
    hours_one.innerHTML = parseInt(hour)
    minute_one.innerHTML = parseInt(minute)
    second_one.innerHTML = parseInt(second)
},1000)
