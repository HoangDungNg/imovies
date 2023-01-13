import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'; //supprting changing themes
import { Provider } from 'react-redux'; //for using Redux

// for using Redux, first importing Provider from 'react-redux'
// then grap the entire application inside the Provider
// create a store.js file to provide the store to Provider
// more info can be found at https://redux-toolkit.js.org/rtk-query/overview
// store.js file contains a reducer which includes required services that need to be implemented
// such as TMDB Api service (services/TMDB.js) or features (currentGenreOrCategory.js)

import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';
import './index.css';

// const theme = createTheme({}); remove this line because we have ToggleColorModeProvider

ReactDOM.render(
  <Provider store={store}>
    {/*<ThemeProvider theme={theme}> replace ThemeProvider with ToggleColorModeProvider*/}
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
    {/*</ThemeProvider>*/}
  </Provider>,
  document.getElementById('root')
);
