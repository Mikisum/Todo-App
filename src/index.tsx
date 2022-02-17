import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App/App';
import { store } from './store/index';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>


      <App />


    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
