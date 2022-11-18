import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
  if (title) {
    return (
      <section className={styles.statistics}>
        <h2 className="title">{title}</h2>
        <div className={styles.item}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className="label">{stat.label}</span>
              <p><span className="percentage">{stat.percentage}%</span></p>
            </li>
          );
        })}
        </div>
      </section>
    );
  }
};

function randomColor() {
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
