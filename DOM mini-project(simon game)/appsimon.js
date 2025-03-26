let start=false;
let game=[];
let user=[];
let level=0;
let idx=0;
let btns=document.querySelectorAll(".box");

function buttonflash(Val){
    console.log("buttonflash called");
    let btn=document.querySelector(`#btn${Val}`);
    btn.classList.add("flashbtn");
    setTimeout(()=>{
        btn.classList.remove("flashbtn")},500);
}

function levelup(){   
    level++; 
    idx =0;
    user=[];
    let h3=document.querySelector("h3");
    h3.innerText=`level ${level}`;
    let Val=Math.floor(Math.random()*4);    
    game.push(`btn${Val}`);
    buttonflash(Val);
}

for(let btn of btns){
    btn.addEventListener("click",()=>{
        btn.classList.add("userflash");
        setTimeout(()=>{btn.classList.remove("userflash")},350)
        user.push(btn.id);
        console.log(`user:${user}`);
        console.log(`game:${game}`); 
      if(user[idx]==game[idx]){
        console.log(level);
        console.log(idx);
        idx++;
        if(idx==level){
            setTimeout(levelup,350);
        }
      }
      else{
        start=false;
        let h3=document.querySelector("h3");
        h3.innerText=`WRONG ANSWER!!   YOUR SCORE:${level},`;
        level=0;
        game=[];
      }
    });
}

document.addEventListener("keypress",()=>{   //starts game
    if(start!=true){
        start=true;
       console.log("Game started");
       levelup();
}
});