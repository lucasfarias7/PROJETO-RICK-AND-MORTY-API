import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocationById, getCharacterById } from '../api/rickAndMortyAPI';
import CharacterInLocationCard from '../components/CharacterInLocationCard';
import './LocationDetail.css';

interface Character {
  id: string;
  name: string;
  image: string;
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

const LocationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Location ID:", id);
  const [location, setLocation] = useState<Location | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchLocation = async () => {
      if (id) {
        const locationData = await getLocationById(parseInt(id));
        setLocation(locationData);

        const characterData = await Promise.all(
          locationData.residents.map(async (characterUrl: string) => {
            const characterId = characterUrl.split('/').pop();
            if (characterId) {
              const data = await getCharacterById(characterId);
              return {
                id: characterId,
                name: data.name,
                image: data.image,
              };
            }
            return null;
          })
        );

        setCharacters(characterData.filter((char) => char !== null) as Character[]);
      }
    };

    fetchLocation();
  }, [id]);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div className="location-detail">
      <h1>{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <h2>Residents</h2>
      <div className="character-list">
        {characters.map((character) => (
          <CharacterInLocationCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationDetail;
