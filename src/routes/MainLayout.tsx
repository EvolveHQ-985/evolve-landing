// MainLayout file to house the Routes
import { Outlet } from "react-router-dom";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";


const MainLayouts = () => {
  return (
    <main className="h-full w-full">
      <Header />
      <section className="h-full md:px-0 w-full pb-[0.5rem]">
        <Outlet />
      </section>
      <Footer/>
    </main>
  );
};

export default MainLayouts;