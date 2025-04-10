import Hero from "./landingPage";
import NaveMenu from "./navmenu";

const Layout = () => {
  return (
    <div className="flex justify-center w-full min-h-screen flex-col ">
      <NaveMenu />
      <Hero />
    </div>
  );
};

export default Layout;
