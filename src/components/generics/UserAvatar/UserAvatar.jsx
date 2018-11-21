import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    width: 30,
    height: 30,
  },
  smallAvatar: {
    width: 50,
    height: 50,
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
  hugeAvatar: {
    width: 150,
    height: 150,
  },
};

class UserAvatar extends React.Component {
  render() {
    const { classes } = this.props;

    let className;
    if (this.props.type === 'small') {
      className = classes.smallAvatar;
    } else if (this.props.type === 'big') {
      className = classes.bigAvatar;
    } else if (this.props.type === 'huge') {
      className = classes.hugeAvatar;
    } else {
      className = classes.avatar;
    }

    return (
      <Avatar
        alt={this.props.user.name}
        src={this.props.user.picture}
        className={className}
      />
    );
  }
}

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['small', 'big', 'huge']),
};

export default withStyles(styles)(UserAvatar);
