import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { signOut } from '../../../actions/accountActions';

function Account() {
  const account = useSelector((state) => state.account);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthenticated = !!account.user;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    handleClose();
    dispatch(signOut());
    history.push('/');
  };

  return (
    <>
      <Avatar
        ref={ref}
        onClick={handleOpen}
        alt="Remy Sharp"
        src={account.user && account.user.avatar}
      />
      {isAuthenticated ? (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={() => history.push(`/${account.user?.username}`)}>
            Perfil
          </MenuItem>
          <MenuItem>Meus Posts</MenuItem>
          <MenuItem>Minhas Conexões</MenuItem>
          <MenuItem onClick={handleSignOut}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={() => history.push('/sign-up')}>
            Registrar Grátis
          </MenuItem>
          <MenuItem onClick={() => history.push('/sign-in')}>Entrar</MenuItem>
        </Menu>
      )}
    </>
  );
}

export default Account;
