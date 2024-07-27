// src/pages/Characters.tsx
import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../api/rickAndMortyAPI';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';
import './Characters.css';

const Characters: React.FC = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [characters, setCharacters] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getAllCharacters(currentPage);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    };

    fetchCharacters();
  }, [currentPage]);

  return (
    <div>
      <h1>Personagens</h1>
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            location={character.location.name}
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

export default Characters;
