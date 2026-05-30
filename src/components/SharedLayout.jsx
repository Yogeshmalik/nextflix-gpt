import Footer from "./Footer";
import Header from "./Header";

const SharedLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 to-black items-center flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
