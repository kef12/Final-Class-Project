import React from 'react';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

import Landing from "../src/components/pages/Landing";
import Board_Game from "../src/components/pages/Board_Game";
import Quotes from "../src/components/pages/Quotes";
import Recipe from "../src/components/pages/Recipe";

function App() {
   return (
       <Router>
           <div>
               <Route exact path="/" components={Landing} />
               <Route path="/Board_Game" components={Board_Game} />
               <Route path="/Quotes" components={Quotes} />
               <Route path="/Recipe" components={Recipe} />
           </div>
       </Router>
   )
}

export default App;