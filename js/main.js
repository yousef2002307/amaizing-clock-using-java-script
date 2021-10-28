

let x = setInterval(() => {
    let hours = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
if( sec <= 9){
    document.querySelector(".sec").textContent = `0${sec}`;
}else{
    document.querySelector(".sec").textContent = sec;
}
if( min <= 9){
    document.querySelector(".min").textContent = `0${min}`;
}else{
    document.querySelector(".min").textContent = min;
}
  
    if( hours <= 9){
        document.querySelector(".hour").textContent = `0${hours}`;
    }else{
        document.querySelector(".hour").textContent = hours;
    }
    if(hours < 12){
        document.querySelector(".last h6").textContent = 'am';
    }else{
        document.querySelector(".last h6").textContent = 'pm';
    }

}, 1000);