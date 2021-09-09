import Status from './Status';

import styles from './Ticket.module.css';

type Props = {
  body: string;
  date: string;
  from: string;
  status: 'NEW' | 'SOLVED';
  subject: string;
};

export const Ticket = ({ body, date, from, status, subject }: Props) => (
  <div className={styles.container}>
    <div>
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
      <div>
        <Status status={status} />
        <p>{subject}</p>
      </div>
      <p>{body}</p>
    </div>
  </div>
);

export default Ticket;
