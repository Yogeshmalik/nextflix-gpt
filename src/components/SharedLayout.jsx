import Footer from "./Footer";
import Header from "./Header";

const SharedLayout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen h-full bg-linear-to-b from-red-950 to-black items-center flex flex-col justify-between pb-[env(safe-area-inset-bottom)]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
