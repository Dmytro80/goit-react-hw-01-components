import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
