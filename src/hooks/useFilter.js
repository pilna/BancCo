import { useState } from 'react';

export const useFiler = () => {
  const [filter, setFilter] = useState(["Banc public"]);
  const filterValues = [
    "verre",
    "text",
    "omr",
    "emb",
    "Colonne végétale",
    "Jeu d'enfant rond",
    "Bac à fleur rectangulaire",
    "Armoire d'arrosage",
    "Grille ronde arbre",
    "Jardinière sur poteau",
    "Jeu d'enfant rectangulaire",
    "Tête d'arrosage",
    "Portique pour végétation",
    "Statue, monument",
    "Robinet ou vanne d'arrosage",
    "Manège",
    "Banc public",
    "Jardinière suspendue",
    "Grille carrée arbre",
    "Jardinière ronde",
  ]

  const filterPav = (pavItems) => {
    const filteredPav = pavItems.filter((item) => {
      return filter.includes(item.garbageType);
    })
    return filteredPav;
  }

  const filterVoiries = (voiriesItems) => {
    const filteredVoiries = voiriesItems.filter((item) => {
      return filter.includes(item.description);
    })
    return filteredVoiries;
  }
  
  return {
    filter,
    filterPav,
    filterVoiries,
    setFilter,
    filterValues
  }
}