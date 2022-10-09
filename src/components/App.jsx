import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import user from 'components/user.json';
import data from 'components/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'gainsboro',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
