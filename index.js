const IncButton = document.getElementById("IncButton");
const DecButton = document.getElementById("DecButton");
const ResButton = document.getElementById("ResButton");
const counter=document.getElementById("count");
const buttons=document.getElementById("btns");
let count=0;

buttons.addEventListener('click',(event)=>{
    console.log(event.target)
    IncButton.onclick = function(){
    count++;
    counter.textContent=count;
}

DecButton.onclick = function(){
    count--;
    counter.textContent=count;
}

ResButton.onclick = function(){
    count=0;
    counter.textContent=count;
}
})  

