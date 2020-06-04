import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/body/normalize.css';
import './styles/body/reset.css';
import './styles/body/introduction.css';

import Routes from './routes';

function App () {

 return <>
  <BrowserRouter>
   <Routes />
  </BrowserRouter>
 </>;

}

export default App;
