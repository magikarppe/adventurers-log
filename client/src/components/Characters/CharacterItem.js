import React from 'react';
import CardComponent from "../ui/Card";
import { Col, Card } from 'react-bootstrap';

function CharacterItem(props) {    
    console.log(props);
    return (
        <Col md={4}>
            <CardComponent>
                <Card.Body>
                    
                    <h4>{props.name}</h4>
                    <h6>{props.race}</h6>
                    <h6>{props.class}</h6>
                    <p>{props.description}</p>
                    
                </Card.Body>
            </CardComponent>
        </Col>
    );
}

export default CharacterItem;