interval=undefined;
timer=30;
function print(){
   document.getElementsByTagName("h3")[0].innerText=timer;
   timer--;
   if(timer==-1){
       document.getElementsByTagName("button")[0].disabled=false;
       clearInterval(interval);
       document.getElementById("cracker").style.visibility="visible";
   }
}

function reset(){
    clearInterval(interval)
    timer=30;
    interval=setInterval(print,1000);
    document.getElementsByTagName("button")[0].disabled=true;
    document.getElementById("cracker").style.visibility="hidden";
}

document.getElementById("cracker").style.visibility="hidden";

