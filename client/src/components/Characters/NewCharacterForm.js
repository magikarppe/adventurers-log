import Card from "../ui/Card";
import React, { useRef } from 'react';

function NewCharacterForm() {
    const nameInputRef = useRef();
    
    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;

        const characterData = {
            name: enteredName
        };

        props.onAddCharacter(characterData);
    }

    return <Card>
        <form onSubmit={submitHandler}>
            <div>
                <label hmtlFor="name">Character Name</label>
                <input 
                type="text" 
                required 
                id="name"
                ref={nameInputRef} 
                />
            </div>
            <button></button>
        </form>
    </Card>
}

export default NewCharacterForm;