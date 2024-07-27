// src/pages/Locations.tsx
import React, { useEffect, useState } from 'react';
import { getAllLocationsPages } from '../api/rickAndMortyAPI';
import LocationCard from '../components/LocationCard';
import Pagination from '../components/Pagination';
import './Locations.css';

const Locations: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [locations, setLocations] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getAllLocationsPages(currentPage);
      setLocations(data.results);
      setTotalPages(data.info.pages);
    };

    fetchLocations();
  }, [currentPage]);

  return (
    <div>
      <h1>Localizações</h1>
      <div className="location-list">
        {locations.map(location => (
          <LocationCard
            key={location.id}
            id={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default Locations;
