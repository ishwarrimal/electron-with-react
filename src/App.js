import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';
import { LoginContext } from './context';
import { Login } from './components/Login';

function App() {
  const [isAuth, updateIsAuth] = useState(false) //local state to this component
  const loginInfo = useState({isAuthenticated: false, userName: 'The Humble being'}) // creating state to be passed to the context
  // Whenever context changes, we use useEffect to chagne our local state value
  useEffect(() => {
    updateIsAuth(loginInfo[0].isAuthenticated)
  }, [loginInfo]);
  return (
    <ErrorBoundary>
      <LoginContext.Provider value={loginInfo} >
        <div className="App">
          <Login />
          <h1 >
            Helloo
          </h1>
          <Button />
          {isAuth ? <List /> : ''}
        </div>
      </LoginContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
