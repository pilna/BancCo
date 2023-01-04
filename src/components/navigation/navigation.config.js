import arrowUpCircle from "../../../assets/arrow-up-circle.svg";
import earth from "../../../assets/earth.svg";
import map from "../../../assets/map.svg";
import profile from "../../../assets/profile.svg";
import { routes } from "../../router";

export const navigationConfig = {
  items: [
    {
      icon: earth,
      label: "Explore",
      to: routes.explore
    },
    {
      icon: arrowUpCircle,
      label: "Record Trail",
      to: routes.recordTrail
    },
    {
      icon: map,
      label: "Promoted Trail",
      to: routes.promotedTrail
    },
    {
      icon: profile,
      label: "Profile",
      to: routes.profile
    }
  ]
}