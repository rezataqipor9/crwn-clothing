import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from './pages/ShopPage/shopPage.jsx'
import HomePage from "./pages/homepage/homePage";
import HeaderComponent from './components/Header/header.component'
import SignInAndSigup from './pages/signin-signup/signin-signup.jsx'
import {auth} from './Firebase/firebase.util'
class App extends Component {
  state = {currentuser:null }
  unsubscribeFromAuth=null
    componentDidMount() {
     this.unsubscribeFromAuth= auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({currentuser: user})
        }
      })
    }
    componentWillUnmount(){
      this.unsubscribeFromAuth()
    }
    
  render() { 
    return ( 
      <div>
    
      <Router> 
      <HeaderComponent currentuser={this.state.currentuser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>      
      <Route exact path='/shop' component={ShopPage}/>  
      <Route exact path='/signin' component={SignInAndSigup}/> 
        </Switch>
      </Router>
    </div>

      
     );
  }
  
}

export default App;
