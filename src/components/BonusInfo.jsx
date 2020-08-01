import React from "react"
import { Row, Col } from "react-bootstrap"
import "../style/bonusInfo.css"

export default function() {
    return (
        <>
        <div className="container-fluid-bonusInfo">
            <Row className="container">
                <Col xs={12}>
                    <Row className="faCirleRow">
                        <Col xs={6}>                        
                            <div className="image"> 
                                <span className="span">70%</span>
                            </div>
                        </Col>
                        <Col xs={6} className="faCircleInfo">
                            <p>Il valore del bonus per deposito!</p>
                        </Col>
                    </Row>
                    <Row className="faCirleRow">
                        <Col xs={6}>                       
                            <div className="image"> 
                                <span className="span">30€</span>
                            </div>
                        </Col>   
                        <Col xs={6} className="faCircleInfo">
                            <p>Il taglio massimo per ogni ricarica!</p>
                        </Col>                     
                    </Row>
                    <Row className="faCirleRow">
                        <Col xs={6}>                    
                            <div className="image"> 
                                <span className="span">3</span>
                            </div>
                        </Col>    
                        <Col xs={6} className="faCircleInfo">
                            <p>I bookmakers convenzionati!</p>
                        </Col>                    
                    </Row>
                    <Row className="faCirleRow">
                        <Col xs={6}>                    
                            <div className="image"> 
                                <span className="span">Ꝏ</span>
                            </div>
                        </Col>    
                        <Col xs={6} className="faCircleInfo">
                            <p>INFINITO, il numero di ricare che puoi fare!</p>
                        </Col>                    
                    </Row>
                </Col>
            </Row>
        </div>
        
        </>
    )
}