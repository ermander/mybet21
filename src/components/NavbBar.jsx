import React from "react"
import "../style/navbar.css"
import { Button } from "react-bootstrap"

export default function(){        
    return (
        <div className="container-fluid">
            <div className="inner">
                <h1>MATCHED BETTING BLACK</h1>
                <p>
                    Il metodo rivoluzionario per ottenere il 70% di bonus su ogni ricarica 
                    e crearsi un vero stipendo lavorando dal pc!
                </p>
                <p>
                    Il tutto ESENTASSE!!!
                </p>
                <a href="https://t.me/MatchedBettingBlack" target="_blank">
                <Button className="submitButton"                      
                >Iscriviti Ora!</Button>
                </a>      
            </div>               
        </div>
    );
}
