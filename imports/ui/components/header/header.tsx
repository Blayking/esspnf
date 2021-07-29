import React from 'react';
import { NavLink } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Accounts } from 'meteor/accounts-base';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function Header() {
  const handleOnLogoutClick = () => {
    Accounts.logout();
  };

  const classes = useStyles();
  const auth = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Typography variant="h6" className={classes.title}>
          <NavLink to="/">Home</NavLink>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <NavLink to="/communities">Communities</NavLink>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <NavLink to="/products">Products</NavLink>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <NavLink to="/events">Events</NavLink>
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <NavLink to="/profile">Profile</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/api">Data</NavLink>
              </MenuItem>
              <MenuItem onClick={handleOnLogoutClick}>
                <NavLink to="/login">Logout</NavLink>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export { Header };
