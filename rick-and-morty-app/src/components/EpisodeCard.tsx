import React from 'react';
import { Link } from 'react-router-dom';
import './EpisodeCard.css';

interface EpisodeCardProps {
  id: number;
  name: string;
  air_date: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ id, name, air_date }) => {
  return (
    <div className="episode-card">
      <Link to={`/episodes/${id}`}>
        <h2>{name}</h2>
        <p>Air Date: {air_date}</p>
      </Link>
    </div>
  );
};

export default EpisodeCard;
