import React from "react"
import "../style/guadagniInfo.css"

export default function(){
    return(
        <>
        <h1 className="my-3 mb-5">Come funziona...</h1>
        <h3 className="my-3 mb-5">Monetizzando solo il 40% del valore del bonus, con una ricarica giornaliera di 30€ anche per un solo bookmaker...</h3>
        <h3 className="my-3 mb-5">Se la matematica non è un opinione, il valore della monetizzazione è di 10€</h3>
        <ul className="my-3 mb-5 list">
            <li>I giorni sono 30...</li>
            <li>I bookmakers sono 3...</li>
            <li>Le ricariche sono infinite...</li>
        </ul>
        <h3 className="my-3 mb-5">
            A voi la scelta!
        </h3>
        <div className="priceContainer">
            <h2 className="my-4">Il tutto al prezzo unico ed iniziale di 197€ per le prime 100 persone!</h2>
        </div>
        </>
    )
}