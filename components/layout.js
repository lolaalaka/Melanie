import Footer from "./footer";
import Navbar from "./navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div
      className={
        router.asPath === "/" || router.asPath === "/contact"
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
