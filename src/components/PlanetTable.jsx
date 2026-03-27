import { useState } from 'react'

const PLANETS = [
  { category: 'Terrestrial Planets', type: '—',          name: 'Mercury', mass: '0.330',  diameter: '4,878',   density: '5,427', gravity: '3.7'  },
  { category: 'Terrestrial Planets', type: '—',          name: 'Venus',   mass: '4.87',   diameter: '12,104',  density: '5,243', gravity: '8.87' },
  { category: 'Terrestrial Planets', type: '—',          name: 'Earth',   mass: '5.97',   diameter: '12,756',  density: '5,514', gravity: '9.8'  },
  { category: 'Terrestrial Planets', type: '—',          name: 'Mars',    mass: '0.642',  diameter: '6,792',   density: '3,933', gravity: '3.7'  },
  { category: 'Jovian Planets',      type: 'Gas Giants', name: 'Jupiter', mass: '1,898',  diameter: '142,984', density: '1,326', gravity: '23.1' },
  { category: 'Jovian Planets',      type: 'Gas Giants', name: 'Saturn',  mass: '568',    diameter: '120,536', density: '687',   gravity: '9.0'  },
  { category: 'Jovian Planets',      type: 'Ice Giants', name: 'Uranus',  mass: '86.8',   diameter: '51,118',  density: '1,270', gravity: '8.7'  },
  { category: 'Jovian Planets',      type: 'Ice Giants', name: 'Neptune', mass: '102',    diameter: '49,528',  density: '1,638', gravity: '11.0' },
  { category: 'Dwarf Planets',       type: '—',          name: 'Pluto',   mass: '0.013',  diameter: '2,370',   density: '1,850', gravity: '0.6'  },
]

const CAT_CLASS = {
  'Terrestrial Planets': 'cat-terrestrial',
  'Jovian Planets':      'cat-jovian',
  'Dwarf Planets':       'cat-dwarf',
}

export default function PlanetTable() {
  const [selectedRow, setSelectedRow] = useState(null)

  // Build row-span groups
  const rows = []
  let i = 0
  while (i < PLANETS.length) {
    const cat = PLANETS[i].category
    const catRows = PLANETS.filter(p => p.category === cat)

    // sub-type spans within a category
    let j = i
    while (j < i + catRows.length) {
      const type = PLANETS[j].type
      const typeRows = catRows.filter(p => p.type === type)

      typeRows.forEach((p, ti) => {
        rows.push({
          ...p,
          showCat:  j === i && ti === 0,
          catSpan:  j === i && ti === 0 ? catRows.length : 0,
          showType: ti === 0,
          typeSpan: ti === 0 ? typeRows.length : 0,
        })
      })
      j += typeRows.length
    }
    i += catRows.length
  }

  return (
    <section className="tables s-gap" id="planet-data">
      <h2>Planetary Facts at a Glance</h2>
      <p className="section-intro">
        Below is a comparative table of major planets in our solar system.
        The data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>

      <div className="table-wrapper">
        <p className="table-caption">
          Data about the planets of our Solar System (Planetary facts taken from NASA)
        </p>
        <table>
          <thead>
            <tr className="hdr-row">
              <th>Category</th>
              <th>Type</th>
              <th>Name</th>
              <th>Mass (10<sup>24</sup>kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m³)</th>
              <th>Gravity (m/s²)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.name}
                className={selectedRow === row.name ? 'row-selected' : ''}
                onClick={() =>
                  setSelectedRow(prev => prev === row.name ? null : row.name)
                }
              >
                {row.showCat && (
                  <td
                    rowSpan={row.catSpan}
                    className={`cat-col ${CAT_CLASS[row.category]}`}
                  >
                    {row.category.replace(' ', '\u00A0')}
                  </td>
                )}
                {row.showType && (
                  <td rowSpan={row.typeSpan} className="sub-col">
                    {row.type}
                  </td>
                )}
                <td className="td-name">{row.name}</td>
                <td>{row.mass}</td>
                <td>{row.diameter}</td>
                <td>{row.density}</td>
                <td>{row.gravity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
