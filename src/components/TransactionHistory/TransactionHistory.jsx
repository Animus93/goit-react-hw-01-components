import styles from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.item}>Type</th>
          <th className={styles.item}>Amount</th>
          <th className={styles.item}>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return <tbody key={item.id}>
          <tr className={styles.tr}>
            <td className={styles.td}>{item.type}</td>
            <td className={styles.td}>{item.amount}</td>
            <td className={styles.td}>{item.currency}</td>
          </tr>
        </tbody>;
      })}
    </table>
  );
};
