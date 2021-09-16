import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Players from './components/playerDB/Players';
import Heroes from './components/heroDB/Heroes';
import Teams from './components/teamDB/Teams';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      user:'',
      token:''
    }
  };

  static getDerivedStateFromProps=(props,state)=>{
    return{
      token: localStorage.getItem('token')
    };
  };

  setUser = (user)=>{
    this.setState({user:user}, ()=> console.log("User is", this.state.user))
  };
  
  setToken=(token)=>{
    this.setState({token});}
  

  doLogout = () =>{
    localStorage.setItem("token", "");
    this.setToken("");
    this.setState({isAdmin:false});
  };

  render(){
    return(
      <Router>
      <div>
        <NavBar token={this.state.token}/>
        <Switch>
          <ProtectedRoute token={this.state.token} exact path="/" render={()=><Home/>}/>
          <ProtectedRoute token={this.state.token} exact path="/players" render={()=><Players/>}/>
          <ProtectedRoute token={this.state.token} exact path="/heroes" render={()=><Heroes/>}/>
          <ProtectedRoute token={this.state.token} exact path="/teams" render={()=><Teams/>}/>
          <ProtectedRoute token={this.state.token} exact path="/logout" render={()=><Logout doLogout={this.doLogout} />}/>
          <Route token={this.state.token} exact path="/register" render={()=><Register/>}/>
          <Route exact path="/login" render={()=><Login setToken={this.setToken} />}/>
        </Switch>
      </div>
    </Router>
    )
  }
}
