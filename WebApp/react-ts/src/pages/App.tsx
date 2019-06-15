import React from 'react';
import Test from './Test';
import Signin from './Main/Signin';
import UserInfo from '../context/UserLoginInfoContextProvider';

const App: React.FC = () => {
  return (
    <div className="App">
      hello this is money sniper
      <UserInfo>
        <Signin />
        <br/>
        <br/>
        <Test />
      </UserInfo>
    </div>
  );
}

export default App;