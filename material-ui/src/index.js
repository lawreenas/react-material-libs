import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green500, lime500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


import App from './components/app';
import reducers from './reducers';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware()(createStore);
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: lime500
  },
  appBar: {
    height: 50,
  }
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
    , document.querySelector('.app'));
