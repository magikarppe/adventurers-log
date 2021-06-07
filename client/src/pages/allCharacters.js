import React, { useEffect, useState } from "react";
import CharacterList from "../components/Characters/CharacterList";
import API from '../utils/API';
import { Container } from 'react-bootstrap';


function AllCharactersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCharacters, setLoadedCharacters] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    API.getCharacters()
      .then((data) => {
        console.log(data.data);
        const characters = [];

        for (const key in data.data) {
          const character = {
            _id: key,
            ...data.data[key]
          };

          characters.push(character);
        }
        console.log(characters);
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
      <Container className="m-3 p-3">
        <CharacterList characters={loadedCharacters} />
      </Container>
    </div>
  );
}

export default AllCharactersPage;