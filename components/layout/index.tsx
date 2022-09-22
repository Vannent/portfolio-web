import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <div className="w-screen h-screen flex items-center flex-col">
      <NavBar />
      <div className="">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
