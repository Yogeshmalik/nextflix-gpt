import Footer from "./Footer";
import Header from "./Header";

const SharedLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-red-950 to-black items-center flex flex-col justify-between">
      <Header />
      <div className="w-full h-full pt-20 flex justify-center mx-auto items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
