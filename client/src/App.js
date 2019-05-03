import React from 'react';
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";

//Import bootstrap, font-awsome, etc.
// import "./App.css";
import Landing from "./pages/Landing";
import GameApp from "./pages/GameApp";
import Quotes from "./pages/Quotes";
import Recipe from "./pages/Recipe";


function App() {
   return (
       <Router>
           <div>
            <Switch>
               <Route exact path="/" component={Landing} />

                <Route path="/GameApp" component={GameApp} /> 
                <Route path="/Quotes" component={Quotes} /> 
          
               <Route path="/Recipe" component={Recipe} />
            </Switch>
           </div>
       </Router>
   )
}

export default App;