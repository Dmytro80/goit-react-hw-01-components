import {
  StatsSection,
  Title,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsValue,
} from './Statistics.styled';
import PropTypes from 'prop-types';
import { AiOutlinePercentage } from 'react-icons/ai';

export const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
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
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
