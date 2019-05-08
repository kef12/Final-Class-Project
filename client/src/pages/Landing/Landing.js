// import {Quotes, GameApp, Recipe} from 'react-router';
import React from "react";
import ValidationForm from "../../components/LoginForm/loginForm";
import ("./Landing.css");


const Landing = () => {
  return (
    <div>
  
	    <div className="home">
		
		    <div className="home_slider_container">
			   			
						<div className="home_slider_overlay"></div>
						<ValidationForm />
						<div className="flex-column align-items-start justify-content-center">
						    <div className="home_container">			
							    
									<div className="row">
										<div className="col">								
											
												<div className="home_title">
													<h1 className="home_title"><span></span>Time to </h1>
													<h1 className="home_title">Kill</h1>
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
