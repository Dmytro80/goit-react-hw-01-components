import { StatisticsTitle } from '../statisticsTitle/StatisticsTitle';
import { StatisticsList } from '../statisticsList/StatisticsList';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <StatisticsTitle title={title} />
      <StatisticsList stats={stats} />
    </section>
  );
};
