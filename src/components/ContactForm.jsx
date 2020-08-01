import React, { Component } from 'react';
import "../style/contactForm.css"
import { Button } from "react-bootstrap"


class ContactForm extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
        message: ""
    }


    render() {
        return (
            <div className="pt-5">
                <div className="contactSection">
                   <h1>Iscriviti per avere maggiori informazioni</h1>
                   <form className="contactForm">
                       <input 
                        type="text" 
                        className="contactFormText" 
                        placeholder="Scrivi il tuo nome"
                        onChange={ (e) => this.setState({
                            name: e.currentTarget.value
                        })}
                       />
                       <input 
                        type="text" 
                        className="contactFormText" 
                        placeholder="Scrivi il tuo cognome"
                        onChange={ (e) => this.setState({
                            surname: e.currentTarget.value
                        })}
                       />
                       <input 
                        type="email" 
                        className="contactFormText" 
                        placeholder="Scrivi la tua email"
                        onChange={ (e) => this.setState({
                            email: e.currentTarget.value
                        })}
                       />
                       <textarea 
                        type="text-area" 
                        className="contactFormText" 
                        placeholder="Scrivi il tuo messaggio" 
                        onChange={ (e) => this.setState({
                            message: e.currentTarget.value
                        })}
                       ></textarea>
                       <Button 
                       className="submitButton"
                       onClick={this.submitMail()}
                       >Iscriviti</Button>
                   </form>
                </div>                
            </div>
        );
    }
}

export default ContactForm;