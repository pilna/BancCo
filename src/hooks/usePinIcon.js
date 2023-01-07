export const usePinIcon = () => {
  
  const getPinIcon = (type) => {
    switch(type) {
      case "verre":
        return require('../../assets/verre-container.png');
      case "text":
        return require('../../assets/texte-container.png');
      case "omr":
        return require('../../assets/omr-container.png');
      case "emb":
        return require('../../assets/emb-container.png');
      case "Colonne végétale":
        return require("../../assets/pole-vege.png");
      case "Jeu d'enfant rond":
        return require("../../assets/playground.png");
      case "Bac à fleur rectangulaire":
        return require("../../assets/planter.png");
      case "Armoire d'arrosage":
        return require("../../assets/water-cabinet.png");
      case "Grille ronde arbre":
        return require("../../assets/grid-circle.png");
      case "Jardinière sur poteau":
        return require("../../assets/pole-flower.png");
      case "Jeu d'enfant rectangulaire":
        return require("../../assets/playground.png");
      case "Tête d'arrosage":
        return require("../../assets/sprinkler.png");
      case "Portique pour végétation":
        return require("../../assets/arch.png");
      case "Statue, monument":
        return require("../../assets/monument.png");
      case "Robinet ou vanne d'arrosage":
        return require("../../assets/water-tap.png");
      case "Manège":
        return require("../../assets/manege.png");
      case "Banc public":
        return require("../../assets/bench.png");
      case "Jardinière suspendue":
        return require("../../assets/hanging-pot.png");
      case "Grille carrée arbre":
        return require("../../assets/grid-square.png");
      case "Jardinière ronde":
        return require("../../assets/planter.png");
      default:
        console.log("default pass !!! with type", type)
        return require('../../assets/glass-container.png');
    }
  }
  
  return {
    getPinIcon
  }
}