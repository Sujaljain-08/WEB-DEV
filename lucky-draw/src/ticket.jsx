import './ticket.css'
function Ticket({ arr }) {
    return (
      <div className="ticket">
        <p className='tic_txt'>Ticket</p>
        {arr.map((el, idx) => (
          <span  key={idx}>{el}</span>
        ))}
      </div>
    );
  }
  
  export default Ticket;
  