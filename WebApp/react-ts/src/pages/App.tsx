import React from 'react';
import Test from './Test';
import Signin from './Main/Signin';
import UserInfo from '../context/UserLoginInfoContextProvider';
import GridLayout from './GridLayout';

const App: React.FC = () => {
  return (
    <div className="App">

      <UserInfo>
        <Signin />
        <br />
        <br />
        <Test />
      </UserInfo>

    </div>
  );
}

export default App;