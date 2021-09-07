import React, { useCallback, useEffect } from 'react';
import authService from '../../services/authService'
import { setUserData } from '../../actions/accountActions';
import { useDispatch } from 'react-redux';

function Auth({children}){
    const dispatch = useDispatch();
    const initauth = useCallback( async () => {
        if(authService.isAuthenticated()){
            await dispatch(setUserData());
        }
    }, [dispatch])

    useEffect (() =>{
        initauth();
    },[initauth])

    return children
}

export default Auth;

