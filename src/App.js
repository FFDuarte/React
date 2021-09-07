import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from './theme';
import Routes from "./routes/routes";
import './mock';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './components/Auth';


function App( ) {
   return(
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Auth>
               <Routes >
                  
               </Routes>
            </Auth>   
         </ThemeProvider>
      </Provider>
  
   );
}

export default App;
