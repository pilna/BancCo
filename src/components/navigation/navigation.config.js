import ArrowUpCircle from "../../../assets/arrow-up-circle.svg";
import Earth from "../../../assets/earth.svg";
import Map from "../../../assets/map.svg";
import Profile from "../../../assets/profile.svg";
import { SvgXml } from 'react-native-svg';
import { routes } from "../../router";

export const navigationConfig = {
  items: [
    {
      icon: <Earth width={36} height={36} />,
      label: "Explore",
      to: routes.explore
    },
    {
      icon: <ArrowUpCircle width={36} height={36} />,
      label: "Record Trail",
      to: routes.recordTrail
    },
    {
      icon: <Map width={36} height={36} />,
      label: "Promoted Trail",
      to: routes.promotedTrail
    },
    {
      icon: <Profile width={36} height={36} />,
      label: "Profile",
      to: routes.profile
    }
  ]
}