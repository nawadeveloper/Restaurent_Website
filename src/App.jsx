import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu_section";
import Menu_section from "./components/Menu_section";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section className="hero_section h-[75vh] fixed top-0 right-0 left-0 -z-10 flex items-center justify-center">
        <Hero />
      </section>

      <section
        id="home"
        className="flex justify-center mt-[75vh] z-50  py-9 px-4 lg:px-0 bg-gray-200"
      >
        <Story />
      </section>

      <section id="menu">
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
