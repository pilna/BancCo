import ArrowUpCircle from "../../../assets/arrow-up-circle.svg";
import Earth from "../../../assets/earth.svg";
import Map from "../../../assets/map.svg";
import Profile from "../../../assets/profile.svg";
import { routes } from "../../router/routes";

export const navigationConfig = {
  items: [
    {
      icon: <Earth width={36} height={36} />,
      label: "Explore",
      to: routes.explore
    },
    {
      icon: <ArrowUpCircle width={36} height={36} />,
      label: "Suggestions",
      to: routes.visuSuggestion
    },
    {
      icon: <Map width={36} height={36} />,
      label: "Add suggestion",
      to: routes.promotedTrail
    },
    {
      icon: <Profile width={36} height={36} />,
      label: "Profile",
      to: routes.profile
    }
  ]
}