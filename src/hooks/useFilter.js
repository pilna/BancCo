import { useState } from 'react';

export const useFiler = () => {
  const [filter, setFilter] = useState([]);
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
  
  return {
    filterValues
  }
}