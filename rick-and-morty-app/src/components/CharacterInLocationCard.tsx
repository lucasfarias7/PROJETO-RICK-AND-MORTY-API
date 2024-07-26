import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterInLocationCard.css';

interface CharacterInLocationCardProps {
  id: string;
  name: string;
  image: string;
}

const CharacterInLocationCard: React.FC<CharacterInLocationCardProps> = ({ id, name, image }) => {
  return (
    <div className="character-in-location-card">
      <Link to={`/characters/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default CharacterInLocationCard;
