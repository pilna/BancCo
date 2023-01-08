import ArrowUpCircle from "../../../assets/arrow-up-circle.svg";
import HammerIcon from "../../../assets/hammer.svg";
import IdeaIcon from "../../../assets/lamp.svg";
import Earth from "../../../assets/earth.svg";
import Map from "../../../assets/map.svg";
import Profile from "../../../assets/profile.svg";
import { routes } from "../../router/routes";

export const navigationConfig = {
  items: [
    {
      icon: <Earth width={36} height={36} />,
      label: "Explorer",
      to: routes.explore
    },
    {
      icon: <HammerIcon width={36} height={36} fill="#000" />,
      label: "Réparer",
      to: routes.adminMap
    },
    {
      icon: <IdeaIcon width={36} height={36} fill="#000" />,
      label: "Suggestion",
      to: routes.promotedTrail
    },
    {
      icon: <Profile width={36} height={36} />,
      label: "Profil",
      to: routes.profile
    }
  ]
}