import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homePage";
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
      <Switch>
      <Route exact path='/' component={HomePage}/>      
      <Route exact path='/shop/hats' component={Hat}/>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
