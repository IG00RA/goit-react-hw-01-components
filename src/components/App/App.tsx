import GlobalStyle from '../GlobalStyle';
import { Statistics } from '../Statistics/Statistics';
import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import user from '../../dataBase/user.json';
import stats from '../../dataBase/data.json';
import friends from '../../dataBase/friends.json';
import transactions from '../../dataBase/transactions.json';
import Container from './App.styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="" items={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
