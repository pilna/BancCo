
export const usePavStatus = () => {
  const pavIsOpen = (pavItem) => {
    if(!pavItem.openHours) return false
    if(pavItem.openHours === "24/7") return true
    if(pavItem.defective) return false
    
    const [startString, endString] = pavItem.openHours.split("-")
    const start = new Date();
    const end = new Date();
  
    start.setHours(...startString.split(":"))
    end.setHours(...endString.split(":"))

    const now = new Date();
    
    return now >= start && now < end
  }

  return {
    pavIsOpen
  }
}