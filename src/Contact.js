import React, { Component } from 'react';
import './main.css'
import contact from './img/contact.png'


class Contact extends Component {
    state = {} 
    handleSubmit(e) {
        e.preventDefault()
        console.log('injooo')
        let form = new FormData(e.target)
        fetch('admin.ahdesign.website', {
            method: 'POST',
            body: form,          
        }).then((res) =>  199 < res.status < 300 ? console.log('nashod'):console.log('shod'))
          .catch((err) => console.log('errorish hasten')) 
    }

    render() { 
        return (
            <section id="contact" className="section" data-num ='4'>
                    <h2 className="title">CONTACT</h2>
                    <div className="section-des">
                        Lorem ipsum dolor sit amet consectetu adipiscing elit viverra tristique placerat.
                    </div>
                    <div className="content-670">
                        <p>
                            Dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet lorem ipsum dolor sit amet enim est urus tincidunt magna ut turpis eu, eu enim. Nisl porttitor elit risus velit urna morbi mauris.
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