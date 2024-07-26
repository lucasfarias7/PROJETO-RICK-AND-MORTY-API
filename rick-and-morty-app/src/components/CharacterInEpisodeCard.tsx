import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterInEpisodeCard.css';

interface CharacterInEpisodeCardProps {
  id: string;
  name: string;
  image: string;
}

const CharacterInEpisodeCard: React.FC<CharacterInEpisodeCardProps> = ({ id, name, image }) => {
  return (
    <div className="character-in-episode-card">
      <Link to={`/characters/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default CharacterInEpisodeCard;
