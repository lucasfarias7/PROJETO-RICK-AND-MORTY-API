import axios from 'axios';

const rickAndMortyAPI = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getAllCharacters = async (page: number) => {
    const response = await rickAndMortyAPI.get(`/character?page=${page}`);
    return response.data;
  };

export const getCharacterById = async (id: string) => {
  const response = await rickAndMortyAPI.get(`/character/${id}`);
  return response.data;
};

export const getAllEpisodes = async () => {
  const response = await rickAndMortyAPI.get('/episode');
  return response.data.results;
};

export const getEpisodeById = async (id: string) => {
  const response = await rickAndMortyAPI.get(`/episode/${id}`);
  return response.data;
};

export const getAllEpisodesPages = async (page: number) => {
    const response = await rickAndMortyAPI.get(`/episode?page=${page}`);
    return response.data;
  };

export const getAllLocations = async () => {
  const response = await rickAndMortyAPI.get('/location');
  return response.data.results;
};

export const getLocationById = async (id: number) => {
    const response = await rickAndMortyAPI.get(`/location/${id}`);
    return response.data;
  };

  export const getAllLocationsPages = async (page: number) => {
    const response = await rickAndMortyAPI.get(`/location?page=${page}`);
    return response.data;
  };
