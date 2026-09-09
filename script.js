// ---- editable racer data: change names/team text here ----
const racers = {
  female: { first: "Siridara", last: "Boonpermphoon", team: "TEAM ORACLE", number: "09" },
  male:   { first: "Kittiphat", last: "ConsortChai", team: "TEAM ALPINE", number: "27" }
};

function applyRacerData(){
  document.getElementById('name1-first').textContent = racers.female.first;
  document.getElementById('name1-last').textContent  = racers.female.last;
  document.getElementById('name2-first').textContent = racers.male.first;
  document.getElementById('name2-last').textContent  = racers.male.last;
}
applyRacerData();

// ---- bottom ticker content, duplicated for seamless loop ----
const tickerItems = [
  "SEASON 01", "GRID LEGENDS", "STARTING LIGHTS OUT", "FULL THROTTLE",
  "PODIUM AWAITS", "SEASON 01", "GRID LEGENDS", "STARTING LIGHTS OUT", "FULL THROTTLE", "PODIUM AWAITS"
];
const track = document.getElementById('tickerTrack');
const html = tickerItems.map(t => `<span>${t}</span>`).join('');
track.innerHTML = html + html; // duplicate for the -50% loop
