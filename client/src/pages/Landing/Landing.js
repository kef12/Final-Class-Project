// import {Quotes, GameApp, Recipe} from 'react-router';
import React from "react";
import NameForm from "../../components/LoginForm/login";
import ValiationForm from "../../components/LoginForm/loginForm";
import ("./Landing.css");



const Landing = () => {
  return (
    <div>
  
	    <div className="home">
		
		    <div className="home_slider_container">
			    <div className="owl-carousel owl-theme home_slider">

					<div className="slide">
						<div className="home_slider_overlay"></div>
						<ValiationForm />
						<div className="slide_wrap d-flex flex-column align-items-start justify-content-center">
						    <div className="home_container">
								
							    <div className="container">
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
