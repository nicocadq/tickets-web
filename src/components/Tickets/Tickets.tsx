import { useTickets } from '../../hooks/useTickets';
import Ticket from '../Ticket';

import styles from './Tickets.module.css';

const Tickets = () => {
  const { error, isLoading, tickets } = useTickets();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong! Try again later</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tickets</h1>
      {tickets.map(({ body, date, from, status, subject, _id }) => (
        <Ticket
          key={_id}
          body={body}
          date={date}
          from={from}
          status={status}
          subject={subject}
        />
      ))}
      {!(tickets.length > 0) && <p>There are not tickets to show</p>}
    </div>
  );
};
export default Tickets;
