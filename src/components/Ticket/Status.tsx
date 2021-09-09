type Props = {
  status: 'NEW' | 'SOLVED';
};

const Status = ({ status }: Props) => <div>{status}</div>;

export default Status;
