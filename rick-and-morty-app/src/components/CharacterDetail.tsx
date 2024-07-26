import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacterById, getEpisodeById } from '../api/rickAndMortyAPI';
import './CharacterDetail.css';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  episode: string[];
}

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (id) {
        const data = await getCharacterById(id);
        setCharacter(data);

        const episodeDetails = await Promise.all(
          data.episode.map(async (episodeUrl: string) => {
            const episodeId = episodeUrl.split('/').pop();
            if (episodeId) {
              const episodeData = await getEpisodeById(episodeId);
              return { id: episodeId, name: episodeData.name };
            }
            return { id: '', name: '' };
          })
        );

        setEpisodes(episodeDetails);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
