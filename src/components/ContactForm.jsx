import React, { Component } from 'react';
import "../style/contactForm.css"
import { Button } from "react-bootstrap"


class ContactForm extends Component {
    state = {
        name: "",
        surname: "",
        email: ""
    }
    render() {
        return (
            <div className="pt-5">
                <div className="contactSection">
                   <h1>Iscriviti per avere maggiori informazioni</h1>
                   <form className="contactForm">
                       <input type="text" className="contactFormText" placeholder="Scrivi il tuo nome"/>
                       <input type="text" className="contactFormText" placeholder="Scrivi il tuo cognome"/>
                       <input type="email" className="contactFormText" placeholder="Scrivi la tua email"/>
                       <textarea type="text-area" className="contactFormText" placeholder="Scrivi il tuo messaggio" ></textarea>
                       <Button className="submitButton">Iscriviti</Button>
                   </form>
                </div>                
            </div>
        );
    }
}

export default ContactForm;