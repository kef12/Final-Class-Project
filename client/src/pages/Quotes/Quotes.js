import React from "react";
import axios from "axios";
require ("./Quotes.css");

class Quotes extends React.Component {
    state = {
        quote: ""
    };
    callApi = () => {
        axios.get("https://quotes.rest/qod.json?category=life")
        .then((response) => {
            let results = response.data.contents.quotes[0].quote;
            let author = response.data.contents.quotes[0].author;
            this.setState({ quote: results, author })
        })
    }
    handleOnClick = event => {
       this.callApi();
    }

    render () {
        return (
            <div>
            {/* <div id="navBar">
                <h1>Time To Kill</h1>
            </div> */}
            <div id="welcomeDiv">                
                <div>
                {<h2>{ `"` + this.state.quote + `"` }</h2>}
                {<h3>{ this.state.author }</h3>}
                
                </div>
                </div>

                <button onClick={this.handleOnClick} className="buttonQuote">Inspire Me</button>

                </div>
            
        )
    }
}

export default Quotes;