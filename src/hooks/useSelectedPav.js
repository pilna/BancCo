import { useState } from "react";

export const useSelectedPav = () => {
  const [selectedPav, setSelectedPav] = useState(null);

  const selectPav = (pav) => {
    setSelectedPav(pav);
  };

  return {
    selectedPav,
    selectPav,
  };
}