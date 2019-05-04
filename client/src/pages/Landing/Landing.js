// import {Quotes, GameApp, Recipe} from 'react-router';
import React from "react";
import ("./Landing.css");



const Landing = () => {
  return (
    <div>
        <nav className="main_nav">
            <ul className="d-flex flex-row align-items-center justify-content-center">
                <li>home</li>
                <li>Board Game</li>
                <li>Recipes</li>
								{/* <button href="/Quotes">Quotes</button> */}
                <a href="/Quotes"/><li>Quotes</li>
						</ul>
						
        </nav>
  
	    <div className="home">
		
		    <div className="home_slider_container">
			    <div className="owl-carousel owl-theme home_slider">

					<div className="slide">
						 {/* <div className="background_image" style="background-image:url(images/samplebackground.jpg)"></div>  */}
						<div className="home_slider_overlay"></div>
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
				
					{/* <div className="slide">
						 <div className="background_image" style="background-image:url(images/samplebackground.jpg)"></div> 
						<div className="home_slider_overlay"></div>
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
					</div> */}
                    
					{/* <div className="slide">
						 <div className="background_image" style="background-image:url(images/samplebackground.jpg)"></div> 
						<div className="home_slider_overlay"></div>
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
					</div> */}

					{/* <div className="slide"> */}
						 {/* <div className="background_image" style="background-image:url(images/samplebackground.jpg)"></div>  */}
						{/* <div className="home_slider_overlay"></div>
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
					</div> */}
			    </div>
		    </div>
        </div>
    </div> 
 );
}

export default Landing;
