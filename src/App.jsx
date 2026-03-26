import { useState, useEffect, useRef } from "react";

import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PlanetTable from "./components/PlanetTable/PlanetTable";

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const planetsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

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
        <PlanetTable />
      </main>
    </>
  );
}

export default App;
