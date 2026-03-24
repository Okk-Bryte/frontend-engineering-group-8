import { useState, useEffect, useRef } from "react";

import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import VideoSection from "./components/VideoSection/VideoSection";
import PlanetsGrid from "./components/PlanetsGrid/PlanetsGrid";
import PlanetTable from "./components/PlanetTable/PlanetTable";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

import { PLANETS_MOCK } from "./data/planetsData";

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const planetsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Replace with your real API endpoint:
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Using mock data for now
    setTimeout(() => {
      setPlanets(PLANETS_MOCK);
      setLoading(false);
    }, 800);
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero
          onExploreClick={() => scrollTo(planetsRef)}
          onContactClick={() => scrollTo(contactRef)}
        />
        <VideoSection />
        <PlanetsGrid
          planetsRef={planetsRef}
          planets={planets}
          loading={loading}
        />
        <PlanetTable />
        <ContactForm contactRef={contactRef} />
      </main>
      <Footer />
    </>
  );
}

export default App;
