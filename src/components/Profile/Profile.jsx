import PropTypes from 'prop-types';
import css from './Profile.module.css'

export default function Profile({ avatar, userName, userLocation, tag, likes, views, followers }) {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={userName + "'s avatar"}
      className={css.avatar}
    />
      <p className={css.name}>{userName}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{userLocation}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers: </span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views: </span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes: </span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
  )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    tag: PropTypes.string,
    userName: PropTypes.string,
    userLocation: PropTypes.string,
    likes: PropTypes.number,
    followers: PropTypes.number,
    views: PropTypes.number,
}