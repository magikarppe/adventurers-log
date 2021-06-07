import React from 'react';
import CharacterItem from "./CharacterItem";
import { Row } from 'react-bootstrap';

function CharacterList(props) {
    return (
        <ul>
            <Row>
            {props.characters.map(character => 
                <CharacterItem 
                    key={character._id} 
                    id={character._id}
                    name={character.name}
                    race={character.race}
                    class={character.class}
                    description={character.description}
                />
            )}
            </Row>
        </ul>
    );
}

export default CharacterList;