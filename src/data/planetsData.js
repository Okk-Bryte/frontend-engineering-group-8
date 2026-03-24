export const PLANETS_MOCK = [
  {
    id: 1,
    name: "Mercury",
    distanceFromSun: "57.9 million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/280px-Mercury_in_true_color.jpg",
    mass: 0.330, diameter: 4878, density: 5427, gravity: 3.7,
  },
  {
    id: 2,
    name: "Venus",
    distanceFromSun: "108.2 million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg",
    mass: 4.87, diameter: 12104, density: 5243, gravity: 8.9,
  },
  {
    id: 3,
    name: "Earth",
    distanceFromSun: "149.6 million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/280px-The_Earth_seen_from_Apollo_17.jpg",
    mass: 5.97, diameter: 12756, density: 5514, gravity: 9.8,
  },
  {
    id: 4,
    name: "Mars",
    distanceFromSun: "227.9 million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg",
    mass: 0.642, diameter: 6792, density: 3933, gravity: 3.7,
  },
  {
    id: 5,
    name: "Jupiter",
    distanceFromSun: "778.6 million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/280px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    mass: 1898, diameter: 142984, density: 1326, gravity: 23.1,
  },
  {
    id: 6,
    name: "Saturn",
    distanceFromSun: "1.433 billion km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/280px-Saturn_during_Equinox.jpg",
    mass: 568, diameter: 120536, density: 687, gravity: 9.0,
  },
  {
    id: 7,
    name: "Uranus",
    distanceFromSun: "2.872 billion km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg",
    mass: 86.8, diameter: 51118, density: 1271, gravity: 8.7,
  },
  {
    id: 8,
    name: "Neptune",
    distanceFromSun: "4.495 billion km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/280px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    mass: 102, diameter: 49528, density: 1638, gravity: 11.0,
  },
  {
    id: 9,
    name: "Pluto",
    distanceFromSun: "5.9 billion km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/280px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg",
    mass: 0.0146, diameter: 2376, density: 2095, gravity: 0.7,
  },
];

export const TABLE_DATA = [
  {
    category: "Terrestrial Planets",
    subCategory: null,
    planets: [
      { name: "Mercury", mass: 0.330, diameter: 4878, density: 5427, gravity: 3.7 },
      { name: "Venus", mass: 4.87, diameter: 12104, density: 5243, gravity: 8.9 },
      { name: "Earth", mass: 5.97, diameter: 12756, density: 5514, gravity: 9.8 },
      { name: "Mars", mass: 0.642, diameter: 6792, density: 3933, gravity: 3.7 },
    ],
  },
  {
    category: "Jovian Planets",
    subCategory: "Gas Giants",
    planets: [
      { name: "Jupiter", mass: 1898, diameter: 142984, density: 1326, gravity: 23.1 },
      { name: "Saturn", mass: 568, diameter: 120536, density: 687, gravity: 9.0 },
    ],
  },
  {
    category: null,
    subCategory: "Ice Giants",
    planets: [
      { name: "Uranus", mass: 86.8, diameter: 51118, density: 1271, gravity: 8.7 },
      { name: "Neptune", mass: 102, diameter: 49528, density: 1638, gravity: 11.0 },
    ],
  },
  {
    category: "Dwarf Planets",
    subCategory: null,
    planets: [
      { name: "Pluto", mass: 0.0146, diameter: 2376, density: 2095, gravity: 0.7 },
    ],
  },
];
