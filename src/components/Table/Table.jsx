import { TABLE_DATA } from '../../planetsData.js';
import './Table.css';

function PlanetTable() {
  return (
    <section className="table-section" aria-label="Planetary facts table">
      <h2>Planetary Facts at a Glance</h2>
      <p className="section-desc">
        Below is a comparative table of major planets in our solar system. The data highlights key
        physical properties used by astronomers and researchers worldwide.
      </p>
      <p className="table-label">
        Data about the planets of our solar system (Planetary facts taken from NASA)
      </p>

      <div className="table-container">
        <table aria-label="Planets data table">
          <thead>
            <tr>
              <th colSpan={2} style={{ textAlign: 'left' }}></th>
              <th>Name</th>
              <th>Mass (10<sup>24</sup>kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m<sup>3</sup>)</th>
              <th>Gravity (m/s<sup>2</sup>)</th>
            </tr>
          </thead>

          <tbody>
            {TABLE_DATA.map((group, gi) =>
              group.planets.map((planet, pi) => {
                let extraRows = 0;

                if (
                  gi + 1 < TABLE_DATA.length &&
                  TABLE_DATA[gi + 1].category === null
                ) {
                  extraRows = TABLE_DATA[gi + 1].planets.length;
                }

                return (
                  <tr key={`${gi}-${pi}`}>
                    {/* Category */}
                    {pi === 0 && group.category && (
                      <td
                        className="cat-cell"
                        rowSpan={group.planets.length + extraRows}
                      >
                        {group.category}
                      </td>
                    )}

                    {!group.category && <td className="cat-cell"></td>}

                    {/* Subcategory */}
                    {pi === 0 && group.subCategory ? (
                      <td className="cat-cell" rowSpan={group.planets.length}>
                        {group.subCategory}
                      </td>
                    ) : !group.subCategory && pi === 0 ? (
                      <td className="cat-cell" rowSpan={group.planets.length}></td>
                    ) : null}

                    {/* Planet Data */}
                    <td>{planet.name}</td>
                    <td>{planet.mass}</td>
                    <td>{planet.diameter.toLocaleString()}</td>
                    <td>{planet.density.toLocaleString()}</td>
                    <td>{planet.gravity}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PlanetTable;
