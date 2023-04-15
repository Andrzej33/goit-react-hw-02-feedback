import PropTypes from 'prop-types';
import { Section, StatList } from './Statistic.styled';

export const Statsics = ({ title, stats }) => {
  // console.log(stats);
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StatList>
    </Section>
  );
};

Statsics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
