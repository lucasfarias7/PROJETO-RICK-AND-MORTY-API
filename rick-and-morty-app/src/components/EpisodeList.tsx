import React from 'react';
import EpisodeCard from './EpisodeCard';

interface Episode {
  id: number;
  name: string;
  air_date: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  return (
    <div style={listStyle}>
      {episodes.map((episode) => (
        <EpisodeCard
          key={episode.id}
          id={episode.id}
          name={episode.name}
          air_date={episode.air_date}
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

export default EpisodeList;
