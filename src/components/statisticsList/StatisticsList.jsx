import { AiOutlinePercentage } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  StatsTitle,
  StatsValue,
} from './StatisticsList.styled';

export const StatisticsList = ({ stats }) => {
  return (
    <StatsList>
      {stats.map(stat => (
        <StatsItem key={stat.id}>
          <StatsTitle>{stat.label}</StatsTitle>
          <StatsValue>
            {stat.percentage}
            <AiOutlinePercentage size="28" />
          </StatsValue>
        </StatsItem>
      ))}
    </StatsList>
  );
};
StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
