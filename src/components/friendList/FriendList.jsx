import {
  FriendsList,
  FriendItem,
  FriendName,
  FriendAvatar,
  FriendActive,
  FriendNotActive,
} from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            {friend.isOnline ? <FriendActive /> : <FriendNotActive />}

            <FriendAvatar src={friend.avatar} alt="User avatar" width="48" />
            <FriendName>{friend.name}</FriendName>
          </FriendItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
