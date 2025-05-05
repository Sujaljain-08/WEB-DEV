import { useState } from 'react';
function Card(){
    const [count, setCount] = useState([0, 0, 0]);
    function tic_gen(){
       setGen(1);
       setCount( [Math.floor(Math.random()*9),Math.floor(Math.random()*9),Math.floor(Math.random()*9)]);
    }
    
    const [gen,setGen]=useState(0);
return(
    <div className="container">
        <h1>Lottery game!</h1>
        <h1>Ticket number : {count}</h1>
        {count[0]+count[1]+count[2]==12?<h1>Yay you won a lottery</h1>:""}
        <button onClick={tic_gen}>{gen?<strong>rebuy</strong>:<strong>buy a ticket</strong>}</button>
    </div>
)}
export default Card;