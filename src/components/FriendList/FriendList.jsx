import { FriendListItem } from './FriendListItem';
import styles from './FriendList.module.css'

export const FriendList = friends => {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friendList = {friends}/>
    </ul>
  );
};
