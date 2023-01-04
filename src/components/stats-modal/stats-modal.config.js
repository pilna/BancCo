import { AllStats } from "./all-stats";
import { CurrentStats } from "./current-stats";
import { Elevation } from "./elevation";

export const statsModalConfig = {
  items: [
    {
      name: "Elevation",
      component: <Elevation />
    },
    {
      name: "Current Stats",
      component: <CurrentStats />
    },
    {
      name: "All Stats",
      component: <AllStats />
    }
  ]
};