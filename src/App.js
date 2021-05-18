import React from "react";
import './App.css';
import Nav from  "../src/components/Nav";
import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import Home from "./components/pages/Home";
import Paintings from "./components/pages/Paintings";
import About from "./components/pages/About";
import Artists from "./components/pages/Artists";



function App() {
  return (
    <div className="App">
      <Router>
         <Nav />
         <Switch>
           <Route path='/' exact component = 
           {Home}
           />
           <Route path="/paintings" component={Paintings} />
           <Route path="/About" component={About} />
           <Route path="/Artists" component={Artists} />
           <Route path="/sign-up" component={Artists} />
          
         </Switch>
      </Router>
    </div>
  );
}

export default App;
