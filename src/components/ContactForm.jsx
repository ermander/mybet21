import React, { Component } from 'react';
import "../style/contactForm.css"
import { Button } from "react-bootstrap"


class ContactForm extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
        message: "",
        sent: false
    }

    render() {
        return (
            <a href="https://t.me/MatchedBettingBlack">
            <Button className="submitButton"                      
            >Iscriviti Ora!</Button>
            </a>            
        );
    }
}

export default ContactForm;