import React from 'react';


class Course extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                
               <div className="row">
                   <div className="offset-lg-4 col-lg-4">
                       <h2>Course Work</h2>
                   </div>
               </div>

                <div className="row">
                    <div className="offset-lg-4 col-lg-4">
                        <h4>General Education</h4>
                    </div>
                </div>

                <div className="row">
                    <div className=" offset-lg-2 col-lg-3">
                        <h3>Spring 2016</h3>
                    </div>
                    <div className="col-lg-3">
                        <h3>Summer 2016</h3>
                    </div>
                    <div className="col-lg-3">
                        <h3>Fall 2016</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="offset-lg-2 col-lg-3">
                        <h5>EDU 1020</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>HIST 1700</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>ART 1020</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="offset-lg-2 col-lg-3">
                        <h5>Math 1010</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>ENGL 1010</h5>
                    </div>
                     <div className="col-lg-3">
                        <h5>REL 2400</h5>
                    </div>
                   
                </div>

                <div className="row">
                    <div className="offset-lg-2 col-lg-3">
                        <h5>PHYS 1010</h5>
                    </div>
                    <div className="offset-lg-3 col-lg-3">
                        <h5>PSY 1010</h5>
                    </div>
                </div>

                 <div className="row">
                    <div className="offset-lg-8 col-lg-3">
                        <h5>CSIS 1430</h5>
                    </div>
                </div>
                  

                 

                  <div className="row">
                    <div className=" offset-lg-3 col-lg-4">
                        <h3 className="spring">Spring 2017</h3>
                    </div>
                    
                    <div className="col-lg-3">
                        <h3>Fall 2017</h3>
                    </div>
                </div>

                  <div className="row">
                    <div className="offset-lg-3 col-lg-3">
                        <h5>PHYS 1010</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>PSY 1010</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-4">
                        <h5>PHYS 1010</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;