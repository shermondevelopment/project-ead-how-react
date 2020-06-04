import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './store';
const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
);
