let count = 0 ;
let countEl =document.getElementById("count");
let ptext = document.getElementById("p");


function increment(){
  count++;
  countEl.innerHTML=count;
}
function decrement(){
  count--;
  countEl.innerHTML=count;
}

function save(){
    let savestr = count+" - "
    ptext.innerHTML+=savestr;
    countEl.textContent=0;
    count = 0;
}