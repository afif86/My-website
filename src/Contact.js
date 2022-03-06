import React, { Component } from 'react';
import './main.css'
import contact from './img/contact.png'
import creditional from './Config';


class Contact extends Component {
    state = {} 
    handleSubmit(e) {
        e.preventDefault()
        let form = new FormData(e.target)
        fetch(creditional.emailAPI, {
            method: 'POST',
            body: form,          
        }).then((res) =>  199 < res.status < 300 ? console.log('Success'):console.log('Failed'))
          .catch((err) => console.log('Sth went wrong')) 
    }

    render() { 
        return (
            <section id="contact" className="section" data-num ='4'>
                    <h2 className="title">CONTACT</h2>
                    <div className="section-des">
                        Need to know more about me? Or have any question?
                    </div>
                    <div className="content-670">
                        <p>
                          Just fill the form and i will get back to you as soon as possible, or send me message via Email, or Social media.
                        </p>
                    </div>

                    <div>
                        <img className="block-right" src={contact} alt=""/>                    
                    </div>

                    <div className="content-670">
                        <form className="contact-form" onSubmit= {this.handleSubmit}>
                            <p>
                                <input id="name" type="text" name="name" placeholder="NAME"/>
                            </p>
                            <p>
                                <input id="contact-email" type="email" name="email" placeholder="EMAIL"/>
                            </p>                                    
                            <p>
                                <input id="subject" type="text" name="subject" placeholder="SUBJECT"/>
                            </p>
                            <p>
                                <textarea id="message" name="message" placeholder="MESSAGE"></textarea>
                            </p>
                            <p className="contact-submit-holder">
                                <input type="submit" value="SEND"/>
                            </p>                                
                        </form> 
                    </div>

                </section>
        );
    }
} 
 
export default Contact;