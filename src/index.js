import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap";

//components
import Main from "./components/main";

import "./css/style.css";

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));