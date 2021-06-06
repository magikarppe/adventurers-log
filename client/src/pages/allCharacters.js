import React, { useEffect, useState } from "react";
import CharacterList from "../components/Characters/CharacterList";
import API from '../utils/API';


function AllCharactersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCharacters, setLoadedCharacters] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    API.getCharacters()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const characters = [];

        for (const key in data) {
          const character = {
            id: key,
            ...data[key],
          };

          characters.push(character);
        }

        setIsLoading(false);
        setLoadedCharacters(characters);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Characters</h1>
      <CharacterList characters={loadedCharacters} />
    </div>
  );
}

export default AllCharactersPage;