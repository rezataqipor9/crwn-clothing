import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from './pages/ShopPage/shopPage.jsx'
import HomePage from "./pages/homepage/homePage";
import HeaderComponent from './components/Header/header.component.jsx'
const Hat = (props) => {
  console.log(props)
  return ( 
    <>
    <h1>Hats</h1>
    </>
   );
}

function App() {
  return (
    <div>
    
      <Router> 
      <HeaderComponent/>
      <Switch>
      <Route exact path='/' component={HomePage}/>      
      <Route exact path='/shop' component={ShopPage}/>  
      <Route exact path='/shop/hats' component={Hat}/>  


      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
