import { useState } from 'react';
import Ticket from './ticket.jsx';
import { sum_arr, genTicket } from './helper.js';

function Lottery({ isWinning, n }) {
  const [ticketArr, setTicketArr] = useState([]);
  const [start, setStart] = useState(false);

  function stateHandler() {
    const newTicket = genTicket(n);
    setTicketArr(newTicket);
    setStart(true);
  }

  return (
    <div className="lottery">
      <h1>Lottery</h1>

      {start && <Ticket arr={ticketArr} />}

      {sum_arr(ticketArr) === isWinning ? 
        <strong>You won the lottery!</strong>:""
      }

      <button onClick={stateHandler}>Buy a Ticket</button>
    </div>
  );
}

export default Lottery;
