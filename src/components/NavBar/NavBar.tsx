import { NavigationItem } from "../../interfaces/navigation.ts";
import { Link, useLocation } from "react-router-dom";

type NavBarProps = {
  navigation: NavigationItem[];
};
const NavBar = ({ navigation }: NavBarProps) => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex gap-5 px-4 md:px-0 container">
        {navigation.map(({ url, title, icon: Icon }) => {
          const active = location.pathname === url;

          return (
            <li
              key={url}
              className={`${
                active ? "bg-[#13293D44]" : ""
              } p-2 hover:bg-[#13293D44] rounded-2xl transition-colors cursor-pointer`}
            >
              <Link to={url} className="flex gap-2 items-center">
                <Icon size={"20px"} /> {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
