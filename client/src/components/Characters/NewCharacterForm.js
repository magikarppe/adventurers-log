import React, { useRef } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CardComponent from '../ui/Card'
import classes from './NewCharacterForm.module.css';

function NewCharacterForm(props) {
    const nameInputRef = useRef();
    const raceInputRef = useRef();
    const strengthInputRef = useRef();
    const dexterityInputRef = useRef();
    const constitutionInputRef = useRef();
    const intelligenceInputRef = useRef();
    const wisdomInputRef = useRef();
    const charismaInputRef = useRef();
    const classInputRef = useRef();
    const imageURLInputRef = useRef();
    const storyInputRef = useRef();
    
    function submitHandler(event) {
        event.preventDefault();

        const enteredNames = nameInputRef.current.value;        
        const selectedRace = raceInputRef.current.value;
        const enteredStrength = strengthInputRef.current.value;
        const enteredDexterity = dexterityInputRef.current.value;
        const enteredConstitution = constitutionInputRef.current.value;
        const enteredIntelligence = intelligenceInputRef.current.value;
        const enteredWisdom = wisdomInputRef.current.value;
        const enteredCharisma = charismaInputRef.current.value;
        const selectedClass = classInputRef.current.value;
        const enteredImageURL = imageURLInputRef.current.value;
        const enteredStory = storyInputRef.current.value;

        const characterAbilities = {
            strength: enteredStrength,
            dexterity: enteredDexterity,
            constitution: enteredConstitution,
            intelligence: enteredIntelligence,
            wisdom: enteredWisdom,
            charisma: enteredCharisma,
        };

        const characterData = {
            name: enteredNames,
            race: selectedRace,
            class: selectedClass,
            abilities: characterAbilities,
            description: enteredStory,
            imageURL: enteredImageURL
        };
        console.log(characterData);
        props.onAddCharacter(characterData);
    }

    return (
        <CardComponent>
            <Form className={classes.form} onSubmit={submitHandler}>
                <FormGroup className={classes.control}>
                    <Label for="name">Character Name</Label>
                    <Input 
                    type="text"
                    name="characterName"
                    required
                    id="name"
                    innerRef={nameInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="race">Character Race</Label>
                    <Input 
                    type="select"
                    name="characterRace"
                    required
                    id="race"
                    innerRef={raceInputRef}>
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
                <FormGroup className={classes.control}>
                    <Label for="strength">Strength</Label>
                    <Input 
                    type="text"
                    name="strength"
                    required
                    id="strength"
                    innerRef={strengthInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="dexterity">Dexterity</Label>
                    <Input 
                    type="text"
                    name="dexterity"
                    required
                    id="dexterity"
                    innerRef={dexterityInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="constitution">Constitution</Label>
                    <Input 
                    type="text"
                    name="constitution"
                    required
                    id="constitution"
                    innerRef={constitutionInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="intelligence">Intelligence</Label>
                    <Input 
                    type="text"
                    name="intelligence"
                    required
                    id="intelligence"
                    innerRef={intelligenceInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="wisdom">Wisdom</Label>
                    <Input 
                    type="text"
                    name="wisdom"
                    required
                    id="wisdom"
                    innerRef={wisdomInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="charisma">Charisma</Label>
                    <Input 
                    type="text"
                    name="charisma"
                    required
                    id="charisma"
                    innerRef={charismaInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="class">class</Label>
                    <Input 
                    type="select"
                    name="characterclass"
                    required
                    id="class"
                    innerRef={classInputRef}>
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
                <FormGroup className={classes.control}>
                    <Label for="imageURL">Image URL</Label>
                    <Input 
                    type="text"
                    name="imageURL"
                    required
                    id="imageURL"
                    innerRef={imageURLInputRef}
                    />
                </FormGroup>
                <FormGroup className={classes.control}>
                    <Label for="story">Story</Label>
                    <Input 
                    type="textarea"
                    name="story"
                    required
                    id="story"
                    innerRef={storyInputRef}
                    />
                </FormGroup>           
                <div className={classes.actions}>
                    <Button>Add Character</Button>
                </div>
            </Form>
        </CardComponent>
    );
}

export default NewCharacterForm;