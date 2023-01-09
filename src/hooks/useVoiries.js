import { useEffect, useState } from "react";

import { BanccoService as service } from "../services/bancco.service";

export const useVoiries = () => {
  const [voiries, setVoiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchVoiries = async () => {
    setLoading(true);
    setError(false);

    service.getVoiries()
      .then(response => {
        setVoiries(response);
      })
      .catch(error => {
        console.log("error", error)
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
