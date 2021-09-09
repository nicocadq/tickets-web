import Status from './Status';

import styles from './Ticket.module.css';

type Props = {
  body: string;
  date: string;
  from: string;
  status: 'NEW' | 'SOLVED';
  subject: string;
};

const Ticket = ({ body, date, from, status, subject }: Props) => (
  <div className={styles.container}>
    <div className={styles.info}>
      <span>
        From:
        {from}
      </span>
      <span>
        Sent:
        {date}
      </span>
    </div>
    <div>
      <div className={styles.header}>
        <Status status={status} />
        <p className={styles.subject}>{subject}</p>
      </div>
      <p className={styles.body}>{body}</p>
    </div>
  </div>
);

export default Ticket;
