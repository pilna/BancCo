import { useEffect, useState } from "react";

import { BanccoService as service } from "../services/bancco.service";

export const useVoiries = () => {
  const [voiries, setVoiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchVoiries = async () => {
    setLoading(true);
    setError(false);

    service.getFeatureAsList(service.features.voiries)
      .then((data) => {
        setVoiries(data)
      })
      .catch(() => {
        setError(true);
      });
    
    setLoading(false);
  };

  useEffect(() => {
    fetchVoiries();
  }, []);

  return {
    loading,
    error,
    voiries
  };
}
