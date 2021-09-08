
import authService from "../services/authService";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN  = '@ACCOUNT/SILENT_LOGIN';
export const SIGNOUT  = '@ACCOUNT/SIGNOUT';


const signIn = (email, password) => {
    return async (dispatch) => {
        const user = await authService.singIn(email,password);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user 
            }
        })
    }
}

const setUserData = () => {
    return async (dispatch) => {
        const user = await authService.singInWithToken();
        dispatch({
            type: SILENT_LOGIN,
            payload: {
                user,
            },
        });
    };
};

const signOut = () => {
    return async (dispatch) => {
        await authService.signOut(); 
        dispatch({
            type: SIGNOUT,
        });
    };
};


export { setUserData , signIn ,  signOut } ;