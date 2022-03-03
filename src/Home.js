import React, { Component, useContext } from 'react';
import './main.css'
import profile from './img/profile.jpg'
import scroll from './img/scroll.svg'
import { NumContext } from './Numcontext/Numcontext';


const Home = () => {
    const { number, setter } = useContext(NumContext)
     
        return (
            <>
                <section id="home" className="section">
                    <div className="container-wrap">                        
                        <h1 className="entry-title" data-jarallax-element="0 30">Hello <br/>I’m <span>AFIF</span></h1>
                        <img className="main-photo block-right" src={profile} alt=""/>                        
                        <a href="#services" className="main-btn slow-scroll">
                            <img src={scroll} alt=""/>

                        </a>
                    </div>
                </section>

            </>
        );

}
 
export default Home;