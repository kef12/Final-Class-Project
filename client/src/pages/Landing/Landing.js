// import {Quotes, GameApp, Recipe} from 'react-router';
import React from "react";
<<<<<<< HEAD
import ValidationForm from "../../components/LoginForm/loginForm";
=======

import NameForm from "../../components/LoginForm/login";
import ValiationForm from "../../components/LoginForm/loginForm";
>>>>>>> 22b9cd6035b89f8f8e06f5b1b169f088ae0c6a42
import ("./Landing.css");


const Landing = () => {
  return (
    <div>
  
	    <div className="home">
		
		    <div className="home_slider_container">
			    <div className="owl-carousel owl-theme home_slider">

					<div className="slide">
						<div className="home_slider_overlay"></div>
<<<<<<< HEAD
						<ValidationForm />
						<div className="slide_wrap d-flex flex-column align-items-start justify-content-center">
						    <div className="home_container">
								
							    <div className="container">
=======

						<ValiationForm />
						<div className="slide_wrap d-flex flex-column align-items-start justify-content-center">
						    <div className="home_container">
								<div className="container">
>>>>>>> 22b9cd6035b89f8f8e06f5b1b169f088ae0c6a42
									<div className="row">
										<div className="col">
											<div className="home_content active">
												<div className="home_subtitle"></div>
												<div className="home_title">
													<h1><span></span>Time to </h1>
													<h1>Kill</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
			    </div>
		    </div>
        </div>
    </div> 
 );
}

export default Landing;
