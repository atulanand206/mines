import { Switch, Route } from 'react-router-dom';
import Board from "./mines/Sweeper";
import Login from "./login/Login";
import Landing from "./v1/Landing/Landing"

const Routes = () => {
  return (
    <Switch> 
      <Route exact path='/match' component={Board}></Route>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/landing' component={Landing}></Route>
    </Switch>
  );
}

export default Routes;