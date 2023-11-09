import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/UI/Hero";
function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
