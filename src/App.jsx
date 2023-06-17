import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu_section from "./components/Menu_section";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <section className="hero_section h-[75vh] fixed top-0 right-0 left-0 -z-10 flex items-center justify-center">
        <Hero />
      </section>

      <section id="home">
        <div className="flex justify-center mt-[75vh] z-50  py-9 px-4 lg:px-0 bg-gray-200">
          <Story />
        </div>
        <div className="w-full max-w-5xl m-auto overflow-hidden mt-6 z-50 px-4 lg:px-0 bg-white">
          <h1 className="text-3xl text-center text-prime pt-6">Gallery</h1>
          <p className="text-xs text-center text-prime pb-6">
            Look at some of our Culture and Food.
          </p>
          <div className="border border-prime">
            <Gallery />
          </div>
        </div>
      </section>

      <section id="menu" className="pt-8">
        <Menu_section />
      </section>

      <section className="bg-prime flex justify-center" id="contact">
        <Footer />
      </section>

      <div className="bg-prime w-full">
        <div className="w-full max-w-5xl mx-auto text-gray-500 text-sm border-t-[1px] border-gray-400">
          <p className="py-4">
            &#169; 2023{" "}
            <a className="underline decoration-gray-300" href="#">
              GORKHALI KITCHEN
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
