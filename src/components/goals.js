import React from 'react';



class Goals extends React.Component {
    render() {
        return (
            <div className="container-fluid goals">
        
               <div className="row go">
                   <div className="col-lg-4 offset-lg-4">
                       <h2>Goals & Outcome</h2>
                   </div>
               </div>
               <div className="row term">
                    <div className="offset-lg-1 col-lg-4">
                        <h4 className="go">Short-term goals</h4>
                        <ul className="myGoals">
                            <li>Obtain my Associates by 2018</li>
                            <li>Get A or B grades for each semester.</li>
                            <li>Select a major. (Done)</li>
                            <li>Find a internship in web development</li>
                        </ul>
                    </div>
                    <div className=" offset-lg-1 col-lg-4">
                        <h4>Long-Term goals</h4>
                        <ul>
                            <li className="myGoals">Graduate from college in 4 years</li>
                            <li className="myGoals">Transfer to BYU-Provo</li>
                            <li className="myGoals">Get into a career</li>
                            <li className="myGoals">Get married</li>
                        </ul>
                    </div>
               </div>
                <div className="row">
                    <div className="offset-lg-4 col-lg-4">
                        <h4>SLCC Outcomes</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-2 col-lg-7 slcc">
                        <p>Students communicate effectively. This includes developing critical literacies—reading, writing, speaking, 
                            listening, visual understanding—that they can apply in various contexts; Organizing and presenting ideas 
                            and information visually, orally, and in writing according to standard usage; Understanding and using the 
                            elements of effective communication in interpersonal, small group, and mass settings.</p>
            
                           <p> Students develop quantitative literacies necessary for their chosen field of study. This includes approaching
                            practical problems by choosing and applying appropriate mathematical techniques; Using information represented 
                            as data, graphs, tables, and schematics in a variety of disciplines; Applying mathematical theory, concepts, 
                            and methods of inquiry appropriate to program-specific problems.</p>

                            <p>Students think critically and creatively. This includes reasoning effectively from available evidence; 
                            Demonstrating effective problem solving; Engaging in creative thinking, expression, and application; Engaging 
                            in reflective thinking and expression; Demonstrating higher-order skills such as analysis, synthesis, and 
                            evaluation; Making connections across disciplines; Applying scientific methods to the inquiry process.</p>

                        <p>Students develop the knowledge and skills to become community engaged learners and scholars. This includes 
                            understanding the natural, political, historical, social, and economic underpinnings of the local, national, 
                            and global communities to which they belong; Integrating classroom and community-based experiential learning; 
                            Identifying and articulating the assets, needs, and complexities of social issues faced by local, national, 
                            and global communities; Evaluating personal strengths, challenges, and responsibility for effecting positive 
                            social change in local, national, and global communities; Drawing upon classroom and community-based learning 
                            to develop professional skills and socially responsible civic behaviors; Engaging in service-learning for 
                            community building and an enhanced academic experience.</p>

                            <p>Students develop the knowledge and skills to work with others in a professional and constructive manner. 
                            This includes engaging with a diverse set of others to produce professional work; Interacting competently 
                            across cultures; Understanding and appreciating human differences; Understanding and acting on standards of 
                            professionalism and civility, including the SLCC Student Code of Conduct.</p>

                            <p>Students develop computer and information literacy. This includes using contemporary computer hardware and 
                            software to effectively complete college-level assignments; Gathering and analyzing information using 
                            technology, library resources, and other modalities; Understanding and acting upon ethical and security 
                            principles with respect to computer technology and to information acquisition and distribution; Distinguishing 
                            between credible and non-credible sources of information, and using the former in their work in an appropriately 
                            documented fashion.</p>

                            <p>Students develop the attitudes and skills for lifelong wellness. This includes understanding the importance of 
                            physical activity and its connection to lifelong wellness; Learning how participation in a fitness, sport or 
                            leisure activity results in daily benefits including stress reduction, endorphin release, and a sense of 
                            well-being.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goals;