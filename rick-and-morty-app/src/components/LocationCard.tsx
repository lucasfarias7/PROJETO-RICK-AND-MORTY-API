// src/components/LocationCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LocationCard.css';

interface LocationCardProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ id, name, type, dimension }) => {
  return (
    <div className="location-card">
      <Link to={`/locations/${id}`}>
        <h2>{name}</h2>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </Link>
    </div>
  );
};

export default LocationCard;
