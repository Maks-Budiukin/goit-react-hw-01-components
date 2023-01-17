import PropTypes from 'prop-types';

import FriendListItem from "components/FriendListItem/FriendListItem";

import css from "./FriendList.module.css"



export default function FriendList({ friends }) {
    
return (
    <ul className={css.friendlist}>
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
  }))
}