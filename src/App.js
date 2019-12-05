import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';
import { LoginContext } from './context';
import { Login } from './components/Login';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {isAuth : false, loginInfo : {isAuthenticated: false, userName: 'The Humble Being'} }
  }

  componentDidUpdate(prevProps,prevState){
    this.setState({isAuth: this.state.loginInfo.isAuthenticated === true})
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state.loginInfo.isAuthenticated !== nextState.loginInfo.isAuthenticated || 
            this.state.isAuth !== nextState.isAuth
  }
  updateIsAuth = value => {
    this.setState({isAuth : value})
  }

  updateLogoinInfo = value => {
    this.setState({loginInfo : value})

  }

  // const [isAuth, updateIsAuth] = useState(false) //local state to this component
  // const loginInfo = useState({isAuthenticated: false, userName: 'The Humble being'}) // creating state to be passed to the context
  // Whenever context changes, we use useEffect to chagne our local state value
  // useEffect(() => {
  //   updateIsAuth(loginInfo[0].isAuthenticated)
  // }, [loginInfo]);
  render(){
    return (
      <ErrorBoundary>
        <LoginContext.Provider value={[this.state.loginInfo, this.updateLogoinInfo]} >
          <div className="App">
            <Login />
            <h1 >
              Helloo
            </h1>
            <Button />
            {this.state.isAuth ? <List /> : ''}
          </div>
        </LoginContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
