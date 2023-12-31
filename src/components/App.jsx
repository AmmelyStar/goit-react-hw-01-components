import user from 'components/Profile/user.json';
import { Profile } from './Profile/Profile';

import data from 'components/Statistics/data.json';
import { Statistics } from './Statistics/Statistics.jsx';

import { FriendList } from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
      
    </>
  );
};



