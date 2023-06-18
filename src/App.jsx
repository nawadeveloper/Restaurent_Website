import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu_section from "./components/Menu_section";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import k_img from "./assets/k.png";
import j_img from "./assets/j.png";
import r_img from "./assets/r.png";

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

      <section id="menu" className="py-8">
        <Menu_section />

        <h1 className="text-3xl text-center text-prime pt-9">Review</h1>
        <p className="text-xs text-center text-prime pb-6">
          Some good words from our happy customers.
        </p>
        <div className="w-full max-w-5xl mx-auto px-4 lg:px-0 pt-2 pb-9 grid grid-flow-row lg:grid-flow-col md:grid-cols-3 gap-6 lg:gap-9">
          <Review
            img={k_img}
            star={5}
            name="Kimberly Kubek"
            review="We’ve never had this ethnic food before and it was delicious. Lots of flavor and you don’t have to have heat, if you’re not into that, to have flavorful food. We did a range of heat from none to medium.  Flavors, herbs and spices combined in a way to be something unique but oddly familiar too. We went primarily with Nepali food. It was really good and interesting. The service was amazing. Server, manager, and owner were all available and helpful but also smiling, personable and willing to educate and this cuisine."
          />
          <Review
            img={j_img}
            star={5}
            name="Jacob Williams"
            review="Incredible, authentic Nepali (and Indian) food right here in Tampa. The spicy dishes are quite spicy, like they should be! Staff was very helpful. If you're an adventurous foodie, don't miss it."
          />
          <Review
            img={r_img}
            star={5}
            name="Radhames Gonzalez"
            review="We went to a different restaurant right before walking into this one( the other one, the service was way to slow, which only had 1 other table with guest). We were so happy we walked into this one. The service was quick and the food was delicious! The waiter took his time to explain the menu and what each item was. The goat was amazing with the right amount of spice and tender. Will definitely return here."
          />
        </div>
      </section>

      <section className="bg-prime flex justify-center" id="contact">
        <Footer />
      </section>

      <div className="bg-prime w-full">
        <div className="w-full max-w-5xl mx-auto text-gray-500 text-sm border-t-[1px] border-gray-400">
          <p className="py-4 built_by_Nawa">
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
