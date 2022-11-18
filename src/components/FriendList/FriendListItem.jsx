import styles from './FriendList.module.css';
export const FriendListItem = ({ friendList: { friends } }) => {
  return friends.map(friend => {
    return (
      <li key={friend.id} className={styles.item}>
        <span className={friend.isOnline ? styles.online : styles.offline}>
          {' '}
        </span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    );
  });
};
