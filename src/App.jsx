import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/UI/Hero";
import Services from "./Components/UI/Services";
import Portfolio from "./Components/UI/Portfolio";
import Contact from "./Components/UI/Contact";
function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="lg:overflow-hidden ">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
