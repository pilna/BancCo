import { useEffect, useState } from "react";

import { BanccoService as service } from "../services/bancco.service";

export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  
  const fetchSuggestions = async () => {
    setLoading(true);
    setError(false);

    service.getSuggestions()
      .then(response => {
        setSuggestions(response);
      })
      .catch(error => {
        console.log("error", error)
        setError(true);
      });
    
    setLoading(false);
  };
  
  useEffect(() => {
    fetchSuggestions();
  }, []);
  
  return { 
    loading,
    error,
    suggestions
  };
}