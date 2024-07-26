import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, image, status, species, location }) => {
  return (
    <div className="card">
      <Link to={`/characters/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Location: {location}</p>
      </Link>
    </div>
  );
};

export default CharacterCard;
