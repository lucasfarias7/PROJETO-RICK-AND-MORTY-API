import React from 'react';
import LocationCard from './LocationCard';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div style={listStyle}>
      {locations.map((location) => (
        <LocationCard
              key={location.id}
              id={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
        />
      ))}
    </div>
  );
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export default LocationList;
