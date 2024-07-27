// src/pages/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="home-title">Rick and Morty API Project</h1>
      <p className="home-description">
        Bem-vindo ao projeto Rick and Morty API. Explore personagens, episódios e localizações da série Rick and Morty.
      </p>
      <div className="home-sections">
        <div className="home-section">
          <h2>Personagens</h2>
          <p>Veja a lista completa de personagens da série.</p>
        </div>
        <div className="home-section">
          <h2>Episódios</h2>
          <p>Explore todos os episódios de Rick and Morty.</p>
        </div>
        <div className="home-section">
          <h2>Localizações</h2>
          <p>Descubra as várias localizações no universo de Rick and Morty.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
