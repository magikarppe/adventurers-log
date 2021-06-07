import React from "react";
import { useHistory } from "react-router-dom";
import NewCharacterForm from "../components/Characters/NewCharacterForm";
import API from '../utils/API'

function NewCharacterPage() {
    const history = useHistory();

  function addCharacterHandler(characterData) {
    API.saveCharacter(characterData)
      .then(() => {
        history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add new character</h1>
      <NewCharacterForm onAddCharacter={addCharacterHandler} />
    </section>
  );
}

export default NewCharacterPage;
