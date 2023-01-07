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
      default:
        return require('../../assets/glass-container.png');
    }
  }
  
  return {
    getPinIcon
  }
}