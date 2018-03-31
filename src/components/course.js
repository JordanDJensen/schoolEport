import React from 'react';
import Navigation from "./navigation";
class Course extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Navigation/>
               <div className="row">
                   <div className="offset-lg-4 col-lg-4">
                       <h2>Course Work</h2>
                   </div>
               </div>
            </div>
        );
    }
}

export default Course;