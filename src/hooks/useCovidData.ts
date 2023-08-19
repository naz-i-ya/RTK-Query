// src/hooks/useCovidData.ts
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchWorldwideData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  return response.data;
};

const fetchCountryData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

export const useCovidData = () => {
  const worldwideData = useQuery('worldwide', fetchWorldwideData);
  const countryData = useQuery('countries', fetchCountryData);

  return {
    worldwideData,
    countryData,
  };
};
