import axios from 'axios';
import { useEffect, useState } from 'react';
import google from '../constants/google';
import {
  GooglePlacesResponse,
  PlacesAutoCompleteResponse,
} from '../store/types/order';

export const usePlacesAutocomplete = (searchTerm: string) => {
  const [results, setResults] = useState<PlacesAutoCompleteResponse>();

  const [location, setLocation] = useState<GooglePlacesResponse>();

  const fetchPlacesAutocomplete = async () => {
    try {
      const { data } = await axios.post<PlacesAutoCompleteResponse>(
        `${google.GOOGLE_MAPS_BASE_URL}/autocomplete/json?key=${google.GOOGLE_MAPS_API_KEY}&input=${searchTerm}`,
      );
      console.log(data);
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onPredictionSelected = async (placeId: string) => {
    try {
      const { data } = await axios.post<GooglePlacesResponse>(
        `${google.GOOGLE_MAPS_BASE_URL}/details/json?key=${google.GOOGLE_MAPS_API_KEY}&placeid=${placeId}`,
      );
      console.log(data);
      setLocation(data);
      setResults(undefined);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPlacesAutocomplete();
  }, [searchTerm]);

  return { results, onPredictionSelected, location };
};
