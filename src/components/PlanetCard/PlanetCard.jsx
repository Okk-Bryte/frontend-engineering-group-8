import "./PlanetCard.css";

function PlanetCard({ planet }) {
  return (
    <div className="planet-card">
      <figure>
        <img src={planet} alt={`${planet.name} planet`} loading="lazy" />
        <figcaption>
          <h3>{planet.name}</h3>
          <p className="distance-label">Distance from Sun</p>
          <p>{planet.distanceFromSun}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default PlanetCard;
