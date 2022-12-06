import "./Ticket.scss";

const Ticket = ({ name, role, id }) => {
  return (
    <div className="ticket">
      <img className="ticket__image" src={image} alt="" />

      <div className="ticket__content">
        <h2 className="ticket__heading">{name}</h2>

        <p className="ticket__role">{role}</p>
      </div>
    </div>
  );
};

export default Ticket;
