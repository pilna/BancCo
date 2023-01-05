import React, { useEffect, useState } from "react";

import { BanccoService as service } from "../services/bancco.service";

export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  
  const fetchSuggestions = async () => {
    setLoading(true);
    setError(false);

    service.getFeatureAsList(service.features.suggestions)
      .then((data) => {
        setSuggestions(data)
      })
      .catch(() => {
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