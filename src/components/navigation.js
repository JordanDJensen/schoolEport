import React from 'react';
import {Link} from "react-router-dom";




class Navigation extends React.Component {
    render() {
        return (
            <div className="container-fluid">
<ul class="nav nav-pills justify-content-center">
  <li class="nav-item">
    <Link className="link" to="/">Welcome</Link>
  </li>

  <li class="nav-item">
    <Link className="link" to="/goals">Goals and Outcome</Link>
  </li>
  
 <div className="dropdown">
 <li class="nav-item">
    <Link className="link" to="/course">Course Work</Link>
  </li>
 </div>
 
  <li class="nav-item">
    <Link className="link" to="/outside">Outside Classroom</Link>
  </li>
</ul>           
            </div>
        );
    }
}

export default Navigation;