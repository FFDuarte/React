import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function WritePost() {
  const history = useHistory();
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const handleClick = () => {
    if (isAuthenticated) {
      history.push('/post/new');
    } else {
      history.push('/sign-in');
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Novo Post
    </Button>
  );
}

export default WritePost;
