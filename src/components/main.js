import React from 'react';
import Navigation from "./navigation";

class Main extends React.Component {
    render() {
        return (
            <div className="container-fluid home">
                <div className="row programing">
                    <div className="col-lg-12">
                        <h1>Jordan Jensen's Eportfolio</h1>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <h2>Welcome to my Eportfolio</h2>
                    </div>
                </div>
                <Navigation/>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                    <p> My name is Jordan Jensen and I am here to receive my Assoicates of Science at Salt Lake Community College. 
                            My e-portfolio will demostrate my goals & outcomes, coursework, and learning outside of class.</p>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-6">
                        <img id="me"src="/images/Jordan.JPG" alt="Jordan Jensen"/>
                    </div>
                
                    <div className="col-lg-6">
                        <h1>About Me</h1>
        
                        <p> I am from Salt Lake City, Utah. I have the privilege to have two wonderful families. I am the only child between 
                            my mother and father but I now have two sisters and brothers. I am the second oldest from my dad and step-mom.
                            I have decided to major in computer science and information system. I have enjoyed in getting to learn code in 
                            one of my classes and have a strong desire to be a Web Developer. Some of the weakness that I have is I have a 
                            hard time in retaining information, preparing for exams, and ask questions. Some of my strengths are I finish 
                            my assignments on date or turn it in as soon as possible, I can work with others, and participate in class 
                            discussions. I believe what motivates me the most is having challenges.It seems through my life I had many 
                            challenges to go through but have been able to accomplish them.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 offset-lg-5">
                        <h1>Favorite Quotes</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 offset-lg-2">
                        <img id="mj" src="/images/mj.png" alt="Michale Jordan "/>
                        <p>"Some people want it to happen, Some wish it would happen, others MAKE IT HAPPEN." - Michael Jordan </p>
                    </div>

                    <div className="col-lg-3 offset-lg-2">
                        <img src="/images/baberuth.jpeg" alt="Babe Ruth"/>
                        <p>"It's hard to beat a person who never GIVES UP." -Babe Ruth</p>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Main;