import Profile from "components/Profile/Profile";
import user from "assets/user.json";

import Statistics from "components/Statistics/Statistics";
import data from "assets/data.json";

import FriendList from "components/FriendList/FriendList";
import friends from "assets/friends.json";

import TransactionsHistory from "components/TransactionHistory/TransactionHistory";
import transactions from "assets/transactions.json";

export default function App() {
    return <>
    
        <Profile
            userName={user.username}
            tag={user.tag}
            userLocation={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
          
        <Statistics stats={data} />
        
        <FriendList friends={friends} />
        
        <TransactionsHistory items={transactions} />
    </>
}