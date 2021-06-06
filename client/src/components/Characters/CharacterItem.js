import React from 'react';
import Card from "../ui/Card";
import { useSelector, useDispatch } from 'react-redux';

function CharacterItem(props) {
    const dispatch = useDispatch();
    const myCharactersList = useSelector(state => state.myCharacter);

    const addMyCharactersHandler = () => {
        dispatch({type: 'add' });
    };

    const removeMyCharactersHandler = () => {
        dispatch({type: 'remove' })
    };


    

    return (
        <li>
            <Card>
                <div>
                    <img src={props.image} alt={props.name} />
                </div>
                <div>
                    <h2>{props.name}</h2>
                    <h3>{props.race}</h3>
                    <p>{props.bio}</p>
                </div>
                <div>
                    <button onClick={addMyCharactersHandler}>Add to My Characters</button>
                </div>
            </Card>
        </li>
    );
}

export default CharacterItem;