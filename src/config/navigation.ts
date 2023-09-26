import { FaSearch, FaUser } from "react-icons/fa";
import { NavigationItem } from "../interfaces/navigation.ts";

const navigation: NavigationItem[] = [
  {
    title: "Login",
    icon: FaUser,
    url: "/",
  },
  {
    title: "Tracking",
    icon: FaSearch,
    url: "/tracking",
  },
];

export default navigation;
