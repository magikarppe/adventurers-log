import React from 'react';
import CharacterItem from "./CharacterItem";

function CharacterList(props) {
    return (
        <ul>
            {props.characters.map(character => 
                <CharacterItem 
                    key={character.id} 
                    id={character.id}
                    name={character.name}
                    race={character.race}
                    bio={character.bio}
                />
            )}
        </ul>
    );
}

export default CharacterList;