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
                    class={character.classId}
                    description={character.description}
                />
            )}
        </ul>
    );
}

export default CharacterList;