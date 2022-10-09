import PropTypes from 'prop-types';
import { InfoBlock } from '../profileInfoBlock/InfoBlock';
import { Stats } from '../profileStats/Stats';
import { Wrapper } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Wrapper>
      <InfoBlock
        username={username}
        avatar={avatar}
        tag={tag}
        location={location}
      />
      <Stats stats={stats} />
    </Wrapper>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};
