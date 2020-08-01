import React from "react"
import { Row, Col } from "react-bootstrap"
import "../style/bonusInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-solid-svg-icons"

export default function() {
    return (
        <>
        <div className="container-fluid-bonusInfo">
            <Row className="mainRow">
                <Col xs={6}>
                    <Row className="faCirleRow">
                        <Col>                        
                            <FontAwesomeIcon className="faCircle" icon={faCircle}/>
                        </Col>
                    </Row>
                    <Row className="faCirleRow">
                        <Col>                       
                         <FontAwesomeIcon className="faCircle" icon={faCircle}/>
                        </Col>                        
                    </Row>
                    <Row className="faCirleRow">
                        <Col>                    
                            <FontAwesomeIcon className="faCircle" icon={faCircle}/>
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