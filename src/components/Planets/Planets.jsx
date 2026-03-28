<div>
  {planets.length === 0 ? (
    <p>Loading...</p>
  ) : (
    planets.map((p) => <p key={p.planet}>{p.planet}</p>)
  )}
</div>
