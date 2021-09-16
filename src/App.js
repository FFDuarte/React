import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter , Route } from 'react-router-dom';

import Auth from './components/Auth';

// import theme from './theme';
import createTheme from './theme';
import { useSettings } from './context/SettingsContext';
import Routes from '../src/routes/routes';
import './mock';

function App() {
  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <BrowserRouter>
        <Auth>
          <Routes>
           
          </Routes>
        </Auth>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
