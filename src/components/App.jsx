import Profile from "components/Profile/Profile";
import user from "assets/user.json";

import Statistics from "components/Statistics/Statistics";
import data from "assets/data.json";

import FriendList from "components/FriendList/FriendList";
import friends from "assets/friends.json";

import TransactionsHistory from "components/TransactionHistory/TransactionHistory";
import transactions from "assets/transactions.json";

import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
        width: 1000px;
        margin: auto;
        padding: 0 50px;
        justify-content: space-between;
    
    `

export default function App() {
    return <Wrapper>
    
        <Profile
            userName={user.username}
            tag={user.tag}
            userLocation={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
          
        <div>
        <Statistics stats={data} title = "Upload Stats"/>
        
        <FriendList friends={friends} />
        </div>
        
        <TransactionsHistory items={transactions} />
    </Wrapper>
}