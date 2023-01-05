import { useEffect, useState } from 'react';

import { BanccoService as service } from '../services/bancco.service';

export const usePav = () => {
  const [pav, setPav] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPavs = async () => {
    setLoading(true);
    setError(false);

    service.getFeatureAsList(service.features.pav)
      .then((data) => {
        setPav(data)
      })
      .catch(() => {
        setError(true);
      });
    
    setLoading(false);
  }

  useEffect(() => {
    fetchPavs();
  }, []);

  return {
    loading,
    error,
    pav
  };
}