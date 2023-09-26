import NavBar from "../components/NavBar/NavBar.tsx";
import Footer from "../components/Footer/Footer.tsx";
//
import { Outlet } from "react-router-dom";
//
import navigation from "../config/navigation.ts";
const RootLayout = () => {
  return (
    <>
      <NavBar navigation={navigation} />
      <div className="px-4 md:px-0 md:container w-full mx-auto my-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
