import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import About from './pages/About';
import Layout from './components/Layout';
import CharacterDetail from './components/CharacterDetail';
import EpisodeDetail from './pages/EpisodeDetail';
import LocationDetail from './pages/LocationDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterDetail />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="episodes/:id" element={<EpisodeDetail />} />
        <Route path="locations" element={<Locations />} />
        <Route path="locations/:id" element={<LocationDetail />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
