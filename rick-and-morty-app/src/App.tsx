import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import Layout from './components/Layout';
import CharacterDetail from './components/CharacterDetail';
import EpisodeDetail from './pages/EpisodeDetail';
import LocationDetail from './pages/LocationDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="Characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterDetail />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="episodes/:id" element={<EpisodeDetail />} />
        <Route path="locations" element={<Locations />} />
        <Route path="locations/:id" element={<LocationDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
