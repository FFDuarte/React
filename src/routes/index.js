import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'



const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { SignIn }  path="/sign-in" />
       </BrowserRouter>
   )
}

export default Routes;