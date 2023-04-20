import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user';
import stats from '../data';
import friends from '../friends';
import transactions from '../transactions';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" items={stats} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Layout>
  );
};
