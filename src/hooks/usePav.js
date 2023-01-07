import { useEffect, useState } from 'react';

import { BanccoService as service } from '../services/bancco.service';

export const usePav = () => {
  const [pav, setPav] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPavs = async () => {
    setLoading(true);
    setError(false);

    service.getPav()
      .then(response => {
        setPav(response.slice(0, 100));
      })
      .catch(error => {
        console.log("error", error)
        setError(true);
      });
    
    setLoading(false);
  }

  useEffect(() => {
    console.log("refetch")
    fetchPavs();
  }, []);

  return {
    loading,
    error,
    pav
  };
}