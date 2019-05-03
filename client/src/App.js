import React from 'react';
import {BrowserRouter as Router, Route,} from "react-router-dom";

//Import bootstrap, font-awsome, etc.

import "./App.css";

import Landing from "./pages/Landing";
import GameApp from "./pages/GameApp";
import Quotes from "./pages/Quotes";
import Recipe from "./pages/Recipe";


function App() {
   return (
       <Router>
           <div>
               <Route exact path="/" components={Landing} />

                <Route path="/GameApp" components={GameApp} /> 
                <Route path="/Quotes" components={Quotes} /> 
          
               <Route path="/Recipe" components={Recipe} />
           </div>
       </Router>
   )
}

export default App;