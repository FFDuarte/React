import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import GuestRoutes from './GuestRoutes';

const Routes = () => {
   return(
       <BrowserRouter>
            <GuestRoutes  path="/"  component = { SignIn } exact   />
            <Route    path="/home"  component = { Home }   />
       </BrowserRouter>
   )
}

export default Routes;