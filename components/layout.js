import Footer from "./footer";
import Navbar from "./navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div
      className={
        router.asPath === "/homepagegit" || router.asPath === "/contact"
          ? "layoutContent"
          : "layoutTwo"
      }
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
