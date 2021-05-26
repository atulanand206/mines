import { Switch, Route } from 'react-router-dom';

import Board from "./mines/Sweeper";
import Login from "./login/Login";

const Routes = () => {
  return (
    <Switch> 
      <Route exact path='/match' component={Board}></Route>
      <Route exact path='/' component={Login}></Route>
    </Switch>
  );
}

export default Routes;