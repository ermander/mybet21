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
            <div>
                <div className="contactSection">
                   <h1>Iscriviti alla newsletter</h1>
                   <form className="contactForm">
                       <input type="text" className="contactFormText" placeholder="Inserisci il tuo nome"/>
                       <input type="text" className="contactFormText" placeholder="Inserisci il tuo cognome"/>
                       <input type="email" className="contactFormText" placeholder="Inserisci la tua email"/>
                       <Button className="submitButton">Iscriviti</Button>
                   </form>
                </div>                
            </div>
        );
    }
}

export default ContactForm;