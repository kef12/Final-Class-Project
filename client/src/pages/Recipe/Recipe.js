import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
//import axios from "axios";
// import RecipeHome from "./RecipeHome";
// import Survey from "./Survey";
// import Plan from "./Plan";
import Button from './Button';

require ("./Recipe.css");


class Recipe extends React.Component {
    state ={
        recipe: ""
    };


render () {
    return (
        <div className="Landing">
    <div className="Landing__banner">
      <h1 className="Landing__banner__heading">Meal Planning Made Easy</h1>
    </div>
    <div className="Landing__data">
      <div className="Landing__data__content">
        <h1>Does this sound like you?</h1>
        <ul>
          <li>Wasted a lot of time thinking about what I should make for dinner today</li>
          <li>Want to watch what I eat but don't know how?</li>
          <li>Not good at pre-planning meals</li>
          <li>Want to track my weight and calorie intake</li>
        </ul>
        <Button type="accent" link={true} path="/Recipe/survey" className="Landing__data__button">Let's find that meal plan</Button>
      </div>
    </div>
  </div>
    )

    // (
    //     <Router>
    //         <div>
    //             <Route path="Recipe/recipehome" component={RecipeHome} />
    //             <Route path="Recipe/survey" component={Survey} />
    //             <Route path="Recipe/meal-plan" component={Plan} />
    //         </div>
    //     </Router>
    // )
}
};

export default Recipe;
//----------------------------------------------------------------------------------
// import React from 'react';
// import {BrowserRouter as Router, Route,} from "react-router-dom";
// // import 'font-awesome/css/font-awesome.css';
// import './RecipeApp.css';

// import RecipeLanding from '../src/components/pages/RecipeLanding';
// import Survey from '../src/components/pages/Survey';
// import Plan from '../src/components/pages/Plan';
// import Footer from '../src/components/shared/Footer';

// function App() {
//   // render() {
//     return (
//       <Router>
//        <div>
//         <Route exact path="/" component={RecipeLanding} />
//         <Route path="/survey" component={Survey} />
//         <Route path="/meal-plan" component={Plan} />
//         {/* <Footer /> */}
//       </div> 
//       </Router>
//     );
//   }


// export default App;