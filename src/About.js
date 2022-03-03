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
                        Viverra tristique placerat  massa est consectetur quisque nu fames lorem ipsum dolor sit amet consectetu.
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
                            Nam ultrices ultrices nec tortor pulvinar fermentum mi. Sociis sit tristique sagittis, mauris volutpat estera phasellus. Varius nec orci, quam augue lorem lines pellentesque non id. Tristique amet volutpat nunc euismod. Mauris <a href="#">felis at quam</a> sollicitudin est sempe vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim. Nisl porttitor elit risus velit urna morbit mauris at proin laoreet lobortis urna aliquam setera fermentum sit iaculis vitae hendrerit et. Arcu ac est dictum lorem ispum dolor sit amet nunc usrus seio.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in sat massa consectetur quisque. Nunc aces fames lectus in libero aliquet ertare feraso est lorem nunc dolor sit amet settera aces volutpat in voltare lupar est phasellus.
                        </p>
                        <p>
                            Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat aecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet sei tristique set volutpat vulputate est phasellus. Volutpat faucibus per praesent aced no nuncare voltare per settera lorem ipsum dolor loboritas prion mauris varius est.
                        </p>
                    </div>

                    <img className="signature" src={singature} alt=""/>

            </section>

        );
    }
}
 
export default About;
