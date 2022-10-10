import { AiOutlinePercentage } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  StatsTitle,
  StatsValue,
} from './StatisticsList.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsList = ({ stats }) => {
  return (
    <StatsList>
      {stats.map(stat => {
        const backgroundColor = getRandomHexColor();

        return (
          <StatsItem
            key={stat.id}
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <StatsTitle>{stat.label}</StatsTitle>
            <StatsValue>
              {stat.percentage}
              <AiOutlinePercentage size="28" />
            </StatsValue>
          </StatsItem>
        );
      })}
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
