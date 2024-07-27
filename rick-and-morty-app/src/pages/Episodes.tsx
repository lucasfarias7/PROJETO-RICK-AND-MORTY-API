// src/pages/Episodes.tsx
import React, { useEffect, useState } from 'react';
import { getAllEpisodesPages } from '../api/rickAndMortyAPI';
import EpisodeCard from '../components/EpisodeCard';
import Pagination from '../components/Pagination';
import './Episodes.css';

const Episodes: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const data = await getAllEpisodesPages(currentPage);
      setEpisodes(data.results);
      setTotalPages(data.info.pages);
    };

    fetchEpisodes();
  }, [currentPage]);

  return (
    <div>
      <h1>Episódios</h1>
      <div className="episode-list">
        {episodes.map(episode => (
          <EpisodeCard
            key={episode.id}
            id={episode.id}
            name={episode.name}
            air_date={episode.air_date}
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

export default Episodes;
