import React from "react";
import { useHistory } from "react-router-dom";
import NewCharacterForm from "../components/Characters/NewCharacterForm";

function NewCharacterPage() {
    const history = useHistory();

  function addCharacterHandler(characterData) {
    fetch(
      "/api/characters",
      {
        method: "POST",
        body: JSON.stringify(characterData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
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
