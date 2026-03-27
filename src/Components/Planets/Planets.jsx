import { useEffect, useState } from "react";

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then(response => response.json())
      .then(data => setPlanets(data));
  }, []);

  return (
    <section>
      <h2>Planets</h2>

      {planets.map((planet, index) => (
        <figure key={index}>
          <img src={planet.image} alt={planet.name} width="150" />
          <figcaption>{planet.name}</figcaption>
          <p>Diameter: {planet.diameter}</p>
          <p>Moons: {planet.moons}</p>
        </figure>
      ))}

    </section>
  );
}

export default Planets;