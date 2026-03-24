import PlanetCard from "../PlanetCard/PlanetCard.jsx";
import "./PlanetsGrid.css";

function PlanetsGrid({ planetsRef, planets, loading }) {
  return (
    <section
      className="planets-section"
      ref={planetsRef}
      id="planets"
      aria-label="Planets section"
    >
      <div className="planets-intro">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      {loading ? (
        <p className="loading" role="status">
          Loading planets...
        </p>
      ) : (
        <div className="planets-grid" role="list" aria-label="Planet cards">
          {planets.map((planet) => (
            <div key={planet.id} role="listitem">
              <PlanetCard planet={planet} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PlanetsGrid;
