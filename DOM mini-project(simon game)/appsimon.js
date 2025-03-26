let start=true;
let arr=[];
let btns=document.querySelectorAll(".box");
for(let btn of btns){
    btn.addEventListener("click",()=> {  console.log(btn.id + " clicked");setTimeout(()=>{btn.classList.remove("userflash")},450);btn.classList.add("userflash")})
}
function levelup(){
    let Val=Math.floor(Math.random()*4);
    arr.push(`btn${Val}`);
    let flash=document.querySelector(`#btn${Val}`);
    setTimeout(()=>{
        flash.classList.remove("flashbtn")},450);
    flash.classList.add("flashbtn");
}

while(start){
    let level=1;
    levelup();
    for(let i=0;i<level;i++){
        
    }
}