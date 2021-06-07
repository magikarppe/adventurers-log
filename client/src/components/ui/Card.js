import React from 'react';
import { Card } from 'react-bootstrap';

function CardComponent(props) {
    return <Card>{props.children}</Card>
}

export default CardComponent;