import React from 'react';
import Signin from './Main/Signin';
import UserInfo from '../context/UserLoginInfoContextProvider';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainFrame from './Main/MainFrame';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserInfo>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/" component={MainFrame} />
        </Switch>
      </UserInfo>
    </BrowserRouter>
  );
}

export default App;