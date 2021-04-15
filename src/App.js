import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/ShopPage/shopPage.jsx";
import HomePage from "./pages/homepage/homePage";
import HeaderComponent from "./components/Header/header.component";
import SignInAndSigup from "./pages/signin-signup/signin-signup.jsx";
import { auth, userprofile } from "./Firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user-action";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const firestordoc = await userprofile(user);

        firestordoc.onSnapshot((snapshot) =>{
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser( user );
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div ref={this.myRef}>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to='/'/>:<SignInAndSigup/>}  />
          </Switch>
        </Router>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const MapStateToProps=({user})=>({
  currentUser:user.currentUser
})

export default connect(MapStateToProps, MapDispatchToProps)(App);
