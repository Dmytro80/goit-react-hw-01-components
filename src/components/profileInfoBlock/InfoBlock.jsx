import { MdOutlineAlternateEmail } from 'react-icons/md';
import PropTypes from 'prop-types';
export const InfoBlock = ({ username, tag, location, avatar }) => {
  return (
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>
        <MdOutlineAlternateEmail size="30" />
        {tag}
      </p>
      <p>{location}</p>
    </div>
  );
};
InfoBlock.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
