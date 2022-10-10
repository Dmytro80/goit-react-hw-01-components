import { StatisticsTitle } from '../statisticsTitle/StatisticsTitle';
import { StatisticsList } from '../statisticsList/StatisticsList';
import { StatsSection } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatisticsTitle title={title} />}
      <StatisticsList stats={stats} />
    </StatsSection>
  );
};
