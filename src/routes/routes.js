import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import GuestRoutes from './GuestRoute';

const Routes = () => {
   return(
       <BrowserRouter>
            <GuestRoutes  path="/SignIn"  component = { SignIn } exact   />
            <Route    path="/"  component = { Home }   />
       </BrowserRouter>
   )
}

export default Routes;