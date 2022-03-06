import React, { Component } from 'react';
import './main.css'
import about from './img/about.png'
import singature from './img/singature.png'

class About extends Component {
    state = {  } 
    render() { 
        return (
            <section id="about" className="section" data-num ='3'>
                    <h2 className="title">ABOUT</h2>
                <div className="section-des">
                    <h3>
                    I’m responsible and dutiful, a little perfectionist and workaholic which makes the best of me come out of my job.
                    </h3>
                        
                    </div>

                    <div className="content-670">
                        <p>
                            Dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet lorem ipsum dolor sit amet enim est urus tincidunt magna ut turpis eu, eu enim. Nisl porttitor elit risus velit urna morbi mauris.
                        </p>
                    </div>

                    <img className="about-img block-right" src={about} alt=""/>

                    <ul className="about-info" data-threshold="0 0" data-jarallax-element="40 0">
                        <li>
                            <h6>EMAIL</h6>
                            <a href="mailto:afif.hosseini86@gmail.com">afif.hosseini86@gmail.com</a>
                        </li>
                        <li>
                            <h6>ROLE</h6>
                            <span>Frontend Developer</span>
                        </li>
                        <li>
                            <h6>PHONE</h6>
                            <a href="tel:+987987654321">(+359) 876 74 13 90</a>
                        </li>
                    </ul>

                    <div className="about-text content-670">
                        <p>
                        I’m detail-oriented which helps me in designing websites that deliver superb user experience.<br/>
                        Highly organized and like to classify everything. So, when I code, the result is always a clean code with appropriate descriptive names and 
                        useful comments, which help colleagues understand the code faster and easier. <br/>
                        I’m a problem solver by nature and most of the time, I can find the easiest solution when a problem comes out.
                        </p>
                        <p>
                        Sometimes, I tend to be too critical about what I design. If my work doesn’t live up to the expectations I have
                         - I might end up redoing it. This, however, leads to higher customer satisfaction. 
                        </p>
                        
                    </div>

                    <img className="signature" src={singature} alt=""/>

            </section>

        );
    }
}
 
export default About;
