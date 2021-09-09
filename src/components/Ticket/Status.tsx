import styles from './Ticket.module.css';

type Props = {
  status: 'NEW' | 'SOLVED';
};

const Status = ({ status }: Props) => (
  <span className={`${styles.status} ${styles[status.toLocaleLowerCase()]}`}>
    {status}
  </span>
);

export default Status;
