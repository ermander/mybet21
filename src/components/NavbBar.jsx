import React from "react"
import "../style/navbar.css"
import "../style/arrow.css"
import { Button } from "react-bootstrap"

export default function(){        
    return (
        <div className="container-fluid">
            <div className="inner">
                <h1>MATCHED BETTING BLACK</h1>
                <p>Il metodo rivoluzionario per ottenere il 70% di bonus su ogni ricarica!</p>
                <Button className="iscrivitiOra">Iscriviti Ora</Button>
                <div className="scrolldown">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>               
        </div>
    );
}
