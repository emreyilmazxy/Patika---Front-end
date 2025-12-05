import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Classes from "./components/Classes/Classes";
import Bmi from "./components/Bmi/Bmi";
import Trainers from "./components/Trainers/Trainers";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Classes />
      <Bmi />
      <Trainers />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
