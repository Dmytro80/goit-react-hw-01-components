import { MdOutlineAlternateEmail } from 'react-icons/md';
import PropTypes from 'prop-types';
import {
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  Wrapper,
} from './InfoBlock.styled';

export const InfoBlock = ({ username, tag, location, avatar }) => {
  return (
    <Wrapper>
      <UserAvatar src={avatar} alt={username} width="350" />

      <UserName>{username}</UserName>
      <UserTag>
        <MdOutlineAlternateEmail size="28" />
        {tag}
      </UserTag>
      <UserLocation>{location}</UserLocation>
    </Wrapper>
  );
};
InfoBlock.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
