import React, { useRef } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function NewCharacterForm(props) {
    const nameInputRef = useRef();
    const raceInputRef = useRef();
    const strengthInputRef = useRef();
    const dexterityInputRef = useRef();
    const constitutionInputRef = useRef();
    const intelligenceInputRef = useRef();
    const wisdomInputRef = useRef();
    const charismaInputRef = useRef();
    const speedInputRef = useRef();
    const classInputRef = useRef();
    const storyInputRef = useRef();
    
    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const selectedRace = raceInputRef.current.value;
        const enteredStrength = strengthInputRef.current.value;
        const enteredDexterity = dexterityInputRef.current.value;
        const enteredConstitution = constitutionInputRef.current.value;
        const enteredIntelligence = intelligenceInputRef.current.value;
        const enteredWisdom = wisdomInputRef.current.value;
        const enteredCharisma = charismaInputRef.current.value;
        const enteredSpeed = speedInputRef.current.value;
        const selectedClass = classInputRef.current.value;
        const enteredStory = storyInputRef.current.value;

        const characterAbilities = {
            strength: enteredStrength,
            dexterity: enteredDexterity,
            constitution: enteredConstitution,
            intelligence: enteredIntelligence,
            wisdom: enteredWisdom,
            charisma: enteredCharisma,
            speed: enteredSpeed
        };

        const characterData = {
            name: enteredName,
            race: selectedRace,
            classId: selectedClass,
            abilities: characterAbilities,
            description: enteredStory
        };

        props.onAddCharacter(characterData);
    }

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <Label for="name">Character Name</Label>
                <Input 
                type="text"
                name="characterName"
                required
                id="name"
                ref={nameInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="race">Character Race</Label>
                <Input 
                type="select"
                name="characterRace"
                required
                id="race"
                ref={raceInputRef}>
                    <option>Dragonborn</option>
                    <option>Hill Dwarf</option>
                    <option>Mountain Dwarf</option>
                    <option>High Elf</option>
                    <option>Wood Elf</option>
                    <option>Dark Elf (Drow)</option>
                    <option>Forest Gnome</option>
                    <option>Rock Gnome</option>
                    <option>Half-Elf</option>
                    <option>Lightfoot Halfling</option>
                    <option>Stout Halfling</option>
                    <option>Half-Orc</option>
                    <option>Human</option>
                    <option>Tiefling</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="strength">Strength</Label>
                <Input 
                type="text"
                name="strength"
                required
                id="strength"
                ref={strengthInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="dexterity">Dexterity</Label>
                <Input 
                type="text"
                name="dexterity"
                required
                id="dexterity"
                ref={dexterityInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="constitution">Constitution</Label>
                <Input 
                type="text"
                name="constitution"
                required
                id="constitution"
                ref={constitutionInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="intelligence">Intelligence</Label>
                <Input 
                type="text"
                name="intelligence"
                required
                id="intelligence"
                ref={intelligenceInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="wisdom">Wisdom</Label>
                <Input 
                type="text"
                name="wisdom"
                required
                id="wisdom"
                ref={wisdomInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="charisma">Charisma</Label>
                <Input 
                type="text"
                name="charisma"
                required
                id="charisma"
                ref={charismaInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="speed">Speed</Label>
                <Input 
                type="text"
                name="speed"
                required
                id="speed"
                ref={speedInputRef}
                />
            </FormGroup>
            <FormGroup>
                <Label for="class">class</Label>
                <Input 
                type="select"
                name="characterclass"
                required
                id="class"
                ref={classInputRef}>
                    <option>Barbarian</option>
                    <option>Bard</option>
                    <option>Cleric</option>
                    <option>Druid</option>
                    <option>Fighter</option>
                    <option>Monk</option>
                    <option>Paladin</option>
                    <option>Ranger</option>
                    <option>Rogue</option>
                    <option>Sorcerer</option>
                    <option>Warlock</option>
                    <option>Wizard</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="story">Story</Label>
                <Input 
                type="textarea"
                name="story"
                required
                id="story"
                ref={storyInputRef}
                />
            </FormGroup>           

            <Button>Add Character</Button>
        </Form>
    );
}

export default NewCharacterForm;