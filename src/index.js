import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap";
import { Route, HashRouter, Switch } from "react-router-dom";

//components

import Main from "./components/main";
import Goals from "./components/goals";
import Course from "./components/course";
import Outside from "./components/outside";

//containers

import "./css/style.css";

class App extends React.Component{
    render(){
        return(
            <div >
                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/goals" component={Goals}/>
                            <Route exact path="/course" component={Course}/>
                            <Route exact path="/outside" component={Outside}/>
                        </Switch>
                    </div>
                </HashRouter>
                
                

            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));