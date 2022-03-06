import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './main.css'


const Navbar = () => {

    // to change the slider number 
    const [num, setNum] = useState(1);

    const check = useRef(0)

    useEffect(() => {
        window.addEventListener('scroll', dataNumber)
        return () => {
            window.removeEventListener('scroll', dataNumber)
        }
    }, [check, num])

    function dataNumber(e) {
        e.preventDefault();
        
        const el = e.target.querySelector('#home').getBoundingClientRect()
        if (el.top <= 0 && !el.bottom <= 0 && check.current <= 1) {
            setNum(1)
            console.log('num1')
        }

        const el1 = e.target.querySelector('#skills').getBoundingClientRect()
        if (el1.top <= 0 && !el1.bottom <= 0 && check.current < 2) {
            setNum(2)
            console.log('num2')
  
        }

        const el2= e.target.querySelector('#about').getBoundingClientRect()
        if ((el2.top <= 0) && !el2.bottom <= 0 && check.current < 3) {
            setNum(3)
            console.log('num3')
     

        }

        const el3= e.target.querySelector('#contact').getBoundingClientRect()
        if ((el3.top <= 0) && !el3.bottom <= 0 && check.current < 4) {
            setNum(4)
            console.log('num4')
       
        }
        
    }

    return ( 
        <div>
                <div id="nav-btn" className="nav-btn">
                        <span className="nav-btn-cover">
                            <span className="menu-line"></span>                   
                        </span>
                </div>
                <div className="s-nav">
                    <div className="nav-count">
                        <div className="current-num">
                        <span>0{num}</span>
                        </div>
                        <div className="pagination-sep">/</div>
                        <div className="total-pages-num">04</div>
                    </div>                                                            
                    <div className="nav-container">
                        <a className="site-title slow-scroll" href="#home">AFIF HOSSEINI</a>
                        <nav className="nav-menu">
                            <ul className="nav-list" >
                                <li><a href="#home" >Home</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                <ul className="nav-soc">
                        <li><a href="mailto: afif.hosseini86@gmail.com">MAIL.</a></li>
                        <li><a href="https://www.linkedin.com/in/afif-hosseini/">IN.</a></li>
                        <li><a href="https://www.facebook.com/avazekakoli#">FB.</a></li>
                        <li><a href="https://www.instagram.com/__aava__/">IG.</a></li>
                        
                    </ul>
                </div>
            </div>
     );
}
 
export default Navbar;
 