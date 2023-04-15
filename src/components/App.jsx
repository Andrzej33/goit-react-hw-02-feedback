import { ProfileCard } from './Profile/Profile';
import user from '../user.json';
import friends from '../friends.json';
import data from '../data.json';
import transactions from '../transactions.json';
import { Statsics } from './Statstics/Statstics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import FeedbackWidget from './FeedbackWidget/FeedbackWidjet';

export const App = () => {
  return (
    <Layout>
      <FeedbackWidget />
      <ProfileCard description={user} />
      <Statsics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
