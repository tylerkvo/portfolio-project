import React from 'react'
import treepic from "../images/treepic.jpg" 
function About() {
  return (
        <section id="about" className="s-about target-section">

            <div className="s-about__section s-about__section--profile">

                <div className="right-vert-line"></div>

                <div className="row">
                    <div className="column large-6 medium-8 tab-full">

                        <div className="section-intro" data-num="01" data-aos="fade-up">
                            <h3 className="subhead">About Me</h3>
                            <h1 className="display-1">I'm the kind of person who isn't afraid of challenges.</h1>
                        </div>

                        <div className="profile-pic" data-aos="fade-up">
                            <img src={treepic} alt="Image"/>
                        </div>

                        <h3 data-aos="fade-up">Profile</h3>

                        <p data-aos="fade-up">
                        Rising third-year student at the University of Virginia interested in studying Commerce, Computer Science, and Data Science. Looking forward to exploring different career paths and opportunities.
                        </p>

                    </div>
                </div>
                
            </div> 

            <div className="s-about__section">

                <div className="row">
                    <div className="column">
                        <h3 data-aos="fade-up">Career</h3>
                    </div>
                </div>

                <div className="row block-large-1-2 block-900-full work-positions">

                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Coastal Cloud</span>
                                    <span className="position__pos">Jr. Analyst Intern</span>
                                </h6>
                                <div className="position__timeframe">
                                    May 2022 - Present
                                </div>
                            </div>

                            <p>
                            • Partaking in client discovery sessions and documenting requirements and business processes to develop custom solutions within the Salesforce platform for clients to consult business challenges
                            </p>
                        </div>
                    </div> 
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Virginia Case Club</span>
                                    <span className="position__pos">Consulting Analyst</span>
                                </h6>
                                <div className="position__timeframe">
                                    September 2021 - Present
                                </div>
                            </div>

                            <p>
                            • Completed a rigorous semester-long training program focused on verbal communication, presentation techniques, and case analysis <br />
                            • Leverage these skills towards creating solutions for case competitions and difficult business situations
                            </p>
                        </div>
                    </div> 
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Lighthouse</span>
                                    <span className="position__pos">Financial Analyst Intern</span>
                                </h6>
                                <div className="position__timeframe">
                                    Febuary 2021 - April 2021
                                </div>
                            </div>

                            <p>
                            • Performed a valuation for an online security start-up, targeting insufficiencies of current solutions in the protection of children against inappropriate online imagery and video content <br />
                            • Conducted market research to advise on the multiple revenue strategies within the company’s SAAS business model
                            </p>
                        </div>
                    </div> 
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Nail Luv & Spa</span>
                                    <span className="position__pos">Administrative Assistant</span>
                                </h6>
                                <div className="position__timeframe">
                                    June 2018 - July 2021
                                </div>
                            </div>

                            <p>
                            • Managed customer relations, appointments, service preparations, and cleaning at my family-owned business <br />
                            • Advised owners on marketing options and facilitated the teaching and speaking of English in a predominately Vietnamese-speaking workplace to foster improved customer services
                            </p>
                        </div>
                    </div> 

                </div> 

            </div> 

        </section> 
  )
}

export default About