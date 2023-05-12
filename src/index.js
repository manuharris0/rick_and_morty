import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'

import App from './App'
import store from './Redux/store';

ReactDOM.render(
  <Provider store={store}> {/* de atributo se le pasa el store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  );

  // el Rrovider le dice a la app que se le provee un store 