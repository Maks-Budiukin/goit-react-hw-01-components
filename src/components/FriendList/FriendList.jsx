import FriendListItem from "components/FriendsListItem/FriendsListItem";

export default function FriendList({ friends, children }) {
    
return (
    <ul>
        {friends.map(({avatar, name, isOnline, id}) => {
            return (<FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />)
        })}


        
    </ul>
);
}