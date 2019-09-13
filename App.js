import React from 'react';
import './App.css';
import Authentication from "../src/authentication";
import Notification from '../src/notification';
import Header from '../src/header';
import { Route, BrowserRouter as Router,Redirect, Switch } from 'react-router-dom';
import '../src/style.scss';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isLogin : false,
    }
  }

  componentWillMount() 
  {
    if(localStorage.getItem('IsLogin') === '1')
    {
        this.setState({isLogin:true});
    }
  }
  setAuth = (userObject) =>
  {
      this.setState({isLogin:true});
      localStorage.setItem('IsLogin',1);
      localStorage.setItem('user',JSON.stringify(userObject));
      
  }

  setDestroyAuth = () =>
  {
      this.setState({isLogin:false});
      localStorage.removeItem("IsLogin");
      localStorage.removeItem("user");
  }

  render()
  {
    return (
      <div>
      <Header setAuth={this.setDestroyAuth} setFlag={this.state.isLogin} />
        <Router >
        <Switch>
        { this.state.isLogin ?
             
             <Route exact path="/" component={Notification}/>
                    
          :
          <Route exact path="/" component={()=> <Authentication setAuth={(userObject) => this.setAuth(userObject)} />}/>
              
        }
        </Switch>
        </Router>
      </div>
    )
  }
  
}

export default App;
