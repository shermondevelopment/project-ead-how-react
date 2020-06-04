import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Introduction from './pages/Introduction';

export default () => {

 return (
   <Switch>
    <Route exact path="/">
     <Introduction />
    </Route>
    <Route exact path="/signin">
      <Signin />
    </Route>
   </Switch>
 );

}
