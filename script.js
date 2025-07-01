var map = L.map('map').setView([50.086, 14.410], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var points = [
  {name: "Prague Astronomical Clock", coords: [50.0870, 14.4208], desc: "15th century astronomical clock & Old Town Square"},
  {name: "Charles Bridge", coords: [50.0865, 14.4114], desc: "Historic bridge with statues & river views"},
  {name: "Wallenstein Garden", coords: [50.0911, 14.4059], desc: "Baroque garden with peacocks"},
  {name: "John Lennon Wall", coords: [50.0860, 14.4050], desc: "Colorful street art wall"},
  {name: "Petřín Hill", coords: [50.0836, 14.3957], desc: "Funicular & lookout tower"}
];

points.forEach(function(point) {
  L.marker(point.coords)
   .addTo(map)
   .bindPopup("<b>" + point.name + "</b><br/>" + point.desc);
});

var latlngs = points.map(p => p.coords);
L.polyline(latlngs, {color: 'blue'}).addTo(map);
