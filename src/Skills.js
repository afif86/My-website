import React, { Component, useContext } from 'react';
import './main.css'
import design from './img/design.svg'
import development from './img/development.svg'
import Progressbar from './Progressbar'
import handleViewport from 'react-in-viewport';
import { NumContext } from './Numcontext/Numcontext';

const Skill = ({ inViewport, enterCount }) => {
    console.log(inViewport)
    const { number, setter } = useContext(NumContext)
        console.log(number)
    if (inViewport) {setter(2)} 
    
       
        return (
            < >
                <section id="skills" className="section" >

                        <div className="content-670">
                            <h2 className="title">Skills</h2>
                            <div className="section-des">
                                <h3>
                                    Main in category
                                </h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in sat massa consectetur quisque. Nunc aces fames lectus in libero aliquet ertare feraso est lorem nunc dolor sit amet settera aces volutpat in voltare lupar est phasellus.
                            </p>
                            <p>
                                Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat aecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique set volutpat <a href="#">estars adipiscing</a> vulputate est phasellus. Volutpat faucibus per praesent aced nuncare voltare per settera lorem ipsum dolor.
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
                                        A full stack allaround  designer that may or may not include a guide for specific createive
                                    </p>
                            </div>

                            <div className="serv-block-item">
                                    <img src={development} alt=""/>
                                    <h4>DEVELOPMENT</h4>
                                    <p>
                                        A full stack allaround  designer that may or may not include a guide for specific createive
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
                
                <section className="section">
                    <div className="section-des">
                        <h3>Skills in detail</h3>
                      
                    </div>
                    <p className="content-670">
                        Viverra tristique placerat in sat massa consectetur quisque. Nunc aces fames lectus in libero aliquet ertare feraso
                        est lorem nunc dolor sit amet settera aces volutpat in voltare lupar est phasellus. Faucibus sed tristique fames sed aliquet
                        ultricies eget viverra arcu.
                    </p>

                    <ul className="skills-history block-right">
                        <li>
                            <span className="date">2016</span>
                            <p>
                                <strong>2015 - 2016</strong> placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet est setera nunc.
                            </p>
                        </li>

                        <li>
                            <span className="date">2017</span>
                            <p>
                                <strong>2016 - 2017</strong> Turpis metus sit diam purus leo in variusquam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod mauris in vitae viverra blandit lectus diam feugiat.
                            </p>
                        </li>

                        <li>
                            <span className="date">2019</span>
                            <p>
                                <strong>2020 - 2021</strong> Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod.
                            </p>
                        </li>

                        <li>
                            <span className="date">2023</span>
                            <p>
                                <strong>2022 - 2026</strong> Eget enim aliquam euismod mauris in vitae viverra blandit lectus faucibus diam consequat maecenas turpis metus sit diam purus leo in varius.
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