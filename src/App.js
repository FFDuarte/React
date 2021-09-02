import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from './theme';
import Routes from "./routes";


function App() {
   return(
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
  
   );
}

export default App;
