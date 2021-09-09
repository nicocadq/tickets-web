import { useTickets } from '../../hooks/useTickets';

const Tickets = () => {
  const { error, isLoading, tickets } = useTickets();

  if (error || !(tickets.length > 0)) {
    return <p>There are not tickets to show</p>;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {tickets.map(({ subject, ticketId }) => (
        <p key={ticketId}>{subject}</p>
      ))}
    </div>
  );
};
export default Tickets;
