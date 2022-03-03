import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './main.css'
import { NumContext } from './Numcontext/Numcontext';


const Navbar = ({num}) => {
   const {number, setter} = useContext(NumContext)

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
                        <span>0{number}</span>
                        </div>
                        <div className="pagination-sep">/</div>
                        <div className="total-pages-num">04</div>
                    </div>                                                            
                    <div className="nav-container">
                        <a className="site-title slow-scroll" href="#home">AFIF HOSSEINI</a>
                        <nav className="nav-menu">
                            <ul className="nav-list">
                                <li><a href="#home">Home</a></li>
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
 