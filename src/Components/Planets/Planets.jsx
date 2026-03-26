import { useEffect, useState } from "react";

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("YOUR_API_ENDPOINT")
      .then(res => res.json())
      .then(data => setPlanets(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section>
      {planets.map(planet => (
        <PlanetCard
          key={planet.name}
          name={planet.name}
          distance={planet.distance}
          image={planet.image}
        />
      ))}
    </section>
  );
}
