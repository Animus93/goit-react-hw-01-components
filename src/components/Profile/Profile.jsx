import PropTypes from 'prop-types';
import defaultImg from './default.jpg';
import styles from './Profile.module.css'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.li}>
          <span className={styles.label}>Followers</span>
          <p><span className={styles.quantity}>{followers}</span></p>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>Views</span>
          <p><span className={styles.quantity}>{views}</span></p>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>Likes</span>
          <p><span className={styles.quantity}>{likes}</span></p>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
};
