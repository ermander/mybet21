import React from "react"
import { Row, Col } from "react-bootstrap"
import "../style/bonusInfo.css"

export default function() {
    return (
        <>
        <div className="container-fluid-bonusInfo">
            <Row className="container">
                <Col xs={6}>
                    <Row className="faCirleRow">
                        <Col>                        
                            <div className="image"> 
                                <span className="span">70%</span>
                            </ div>
                        </Col>
                    </Row>
                    <Row className="faCirleRow">
                        <Col>                       
                            <div className="image"> 
                                <span className="span">30€</span>
                            </ div>
                        </Col>                        
                    </Row>
                    <Row className="faCirleRow">
                        <Col>                    
                            <div className="image"> 
                                <span className="span">3</span>
                            </ div>
                        </Col>                        
                    </Row>
                </Col>
                <Col xs={6}>
                </Col>
            </Row>
        </div>
        
        </>
    )
}