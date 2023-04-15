import { FriendListItem } from './FriendListItem';

import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
