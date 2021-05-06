import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <Nav />
      <section className="layout__content">
        {children}
      </section>
      <Footer />
    </section>
  );
};

export default Layout;
