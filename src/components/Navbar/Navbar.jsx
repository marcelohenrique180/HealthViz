import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Navbar.scss';

const options = ['Sair'];
const ITEM_HEIGHT = 48;

const styles = {
  colorPrimary: {
    color: '#ffffff',
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  logout() {
    this.handleClose();
    this.props.logout();
  }

  render() {
    const { classes } = this.props;
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);

    return (
      <div className='navbar'>
        <Link className='link' to='/inicial'>
          <h1 className='navbar__title'>HealthViz</h1>
        </Link>

        <div className='navbar__menu-options'>
          <IconButton
            className={classes.colorPrimary}
            aria-owns={open ? 'long-menu' : undefined}
            aria-haspopup='true'
            color='primary'
            onClick={this.handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id='long-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}>
            {options.map(option => (
              <MenuItem key={option} onClick={this.logout}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
