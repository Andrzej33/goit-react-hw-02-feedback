import PropTypes from 'prop-types';
import { Status } from './FriendList.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status className="status" isOnline={isOnline}></Status>

      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="friend">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
