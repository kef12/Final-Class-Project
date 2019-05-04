import React from 'react';
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";

//Import bootstrap, font-awsome, etc.
// import "./App.css";
import Landing from "./pages/Landing";
import GameApp from "./pages/GameApp";
import Quotes from "./pages/Quotes";
import Recipe from "./pages/Recipe";
import RecipeHome from "./pages/Recipe/RecipeHome";
import Survey from "./pages/Recipe/Survey";
import Plan from "./pages/Recipe/Plan";
import Nav from "./components/Nav";


function App() {
   return (
       <Router>
           <div>
               <Nav />
            <Switch>
               <Route exact path="/" component={Landing} />

                <Route path="/GameApp" component={GameApp} /> 
                <Route path="/Quotes" component={Quotes} /> 
          
               <Route path="/Recipe" component={Recipe} />
               <Route path="Recipe/recipehome" component={RecipeHome} />
               <Route path="Recipe/survey" component={Survey} />
               <Route path="Recipe/meal-plan" component={Plan} />
               
            </Switch>
           </div>
       </Router>
   )
}

export default App;