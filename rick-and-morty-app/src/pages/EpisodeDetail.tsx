import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpisodeById, getCharacterById } from '../api/rickAndMortyAPI';
import CharacterInEpisodeCard from '../components/CharacterInEpisodeCard';
import './EpisodeDetail.css';

interface Character {
  id: string;
  name: string;
  image: string;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

const EpisodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      if (id) {
        const episodeData = await getEpisodeById(id);
        setEpisode(episodeData);

        const characterData = await Promise.all(
          episodeData.characters.map(async (characterUrl: string) => {
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

    fetchEpisode();
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="episode-detail">
      <h1>{episode.name}</h1>
      <p>Air Date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
      <h2>Personagens</h2>
      <div className="character-list">
        {characters.map((character) => (
          <CharacterInEpisodeCard
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

export default EpisodeDetail;
