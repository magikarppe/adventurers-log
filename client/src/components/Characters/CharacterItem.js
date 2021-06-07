import React from 'react';
import Card from "../ui/Card";

function CharacterItem(props) {    

    return (
        <li>
            <Card>
                <div>
                    <h2>{props.name}</h2>
                    <h3>{props.race}</h3>
                    <p>{props.description}</p>
                </div>
            </Card>
        </li>
    );
}

export default CharacterItem;