// ---- editable racer data: change names/team text here ----
const racers = {
  female: { first: "ณิชา", last: "วรรณสุข", team: "TEAM ORACLE", number: "07" },
  male:   { first: "ธนภัทร", last: "ศักดิ์เจริญ", team: "TEAM ALPINE", number: "11" }
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
  "TEAM MEMBERS", "GIT WORKFLOW", "CLICK A NAME TO VIEW PROFILE", "BRANCH · COMMIT · MERGE",
  "TEAM MEMBERS", "GIT WORKFLOW", "CLICK A NAME TO VIEW PROFILE", "BRANCH · COMMIT · MERGE"
];
const track = document.getElementById('tickerTrack');
const html = tickerItems.map(t => `<span>${t}</span>`).join('');
track.innerHTML = html + html; // duplicate for the -50% loop
