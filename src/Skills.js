import React, { Component, useContext } from 'react';
import './main.css'
import design from './img/design.svg'
import development from './img/development.svg'
import Progressbar from './Progressbar'
import handleViewport from 'react-in-viewport';
import { NumContext } from './Numcontext/Numcontext';

const Skill = ({ inViewport, enterCount }) => {

    const { number, setter } = useContext(NumContext)
      
    if (inViewport) { console.log('oomad')} 
    
       
        return (
            < >
                <section id="skills" className="section" >

                        <div className="content-670">
                            <h2 className="title">Skills</h2>
                            <div className="section-des">
                                <h3>
                                    In category
                                </h3>
                            </div>
                            <p>
                            I’m a front-end developer with 4 years of experience designing simple but efficient website for different
                            companies and start-ups to help them present an attractive and distinct face of their organization.
                            </p>
                            
                        </div>

                        <ul className="serv-link-cover block-right">
                            <li>
                                <a href="#">DOWNLOAD CV</a>
                            </li>
                            <li>
                                <a href="#">MY GITHUB</a>
                            </li>
                        </ul>
                    
                    <div className="content-670">
                            <div className="serv-block-wrap">

                            <div className="serv-block-item">
                                    <img src={design} alt=""/>
                                    <h4>DESIGN</h4>
                                    <p>
                                    Web graphic design; user interface design; authoring; user experience design; and search engine optimization
                                    </p>
                            </div>

                            <div className="serv-block-item">
                                    <img src={development} alt=""/>
                                    <h4>DEVELOPMENT</h4>
                                <p>
                                    Development of the graphical user interface of a website, standardised code and proprietary software
                                </p>
                                </div>
                            </div>
                        </div>
                </section>
                
                <section className="section">
                    <div className="section-des">
                        <h3>What I do </h3>
                      
                    </div>
                    <p className="content-670">
                        What I do is wireframe, style selection, mock-up and visualization for the website as well as consult my clients / stakeholders on how
                        to make the website effective and impactful. I then perform the coding with the aim of making the website responsive for all
                        kinds of devices. As a front-end developer, I always seek ways of optimizing the web pages and striking a balance between
                        functional and aesthetic design as well as providing top quality ongoing maintenance.
                    </p>

                    <ul className="skills-history block-right">
                        <li>
                            <span className="date">2021</span>
                            <p>
                                <strong>Projects:</strong> Open Bulgaria- Nikkaran- KMedia- AHesign <br/><strong>Role:</strong> Frontenddeveloper
                            </p>
                        </li>

                        <li>
                            <span className="date">2020</span>
                            <p>
                                <strong>Projects:</strong> Nurident- DrNuri- BasalFix - AHesign  <br/><strong>Role:</strong> Frontenddeveloper
                            </p>
                        </li>

                        <li>
                            <span className="date">2019</span>
                            <p>
                                <strong>Projects:</strong> Gemos Imperia- Ayande Roshan <br/><strong>Role:</strong> Frontenddeveloper
                            </p>
                        </li>

                        <li>
                            <span className="date">2018</span>
                            <p>
                                <strong>Projects:</strong> Gemos Imperia <br/><strong>Role:</strong> WebDesigner | Frontenddeveloper
                            </p>
                        </li>
                    </ul>

                    <ul className="skills-progress">
                    <li>
                            <span className="name">Javascipt</span>
                            
                            <Progressbar progress='68'  height={10} />
                          
                        </li>

                        <li>
                            <span className="name">jQuery</span>
                            <Progressbar progress='65'  height={10} />
                        </li>
                        <li>
                            <span className="name">React</span>
                            <Progressbar progress='65'  height={10} />

                        </li>

                        <li>
                            <span className="name">Restfull API</span>
                            <Progressbar progress='70'  height={10} />
                        </li>
                        <li>
                            <span className="name">HTML5</span>
                            <Progressbar progress='87'  height={10} />
                        </li>

                        <li>
                            <span className="name">Git/ VScode</span>
                            <Progressbar progress='80'  height={10} />
                        </li>

                        <li>
                            <span className="name">CSS</span>
                            <Progressbar progress='90'  height={10} />
                        </li>

                        <li>
                            <span className="name">UI/UX</span>
                            <Progressbar progress='75'  height={10} />
                        </li>

                        <li>
                            <span className="name">Bootstrap</span>
                            <Progressbar progress='80'  height={10} />
                        </li>

                        <li>
                            <span className="name">Figma</span>
                            <Progressbar progress='70'  height={10} />
                        </li>

                        <li>
                            <span className="name">Cross platform testing</span>
                            <Progressbar progress='90'  height={10} />
                        </li>

                        <li>
                            <span className="name">Photoshop</span>
                            <Progressbar progress='70'  height={10} />
                        </li>
                    </ul>

                </section>
            </>
    );
    
}
 
const Skills = handleViewport(Skill, /** options: {}, config: {} **/);
export default Skills;