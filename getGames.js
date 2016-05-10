#!/usr/bin/node

const jsdom = require('jsdom');
const fs = require("fs");

function getID(url) {
	return +url.match(/\d+$/)[0];
}

let offset = 0;
let fname = "data/games.json";
let data = JSON.parse(fs.readFileSync(fname)) || {};

let maxDone = Object.keys(data).map(x => +x).sort((a,b) => (a - b)).pop() || 1;
if(maxDone > 1) {
	maxDone -= 50; // ensure fetching games that were previously unfinished
}
console.log("fetching until "+maxDone);
function save() {
	console.log("writing to games.json");
	fs.writeFileSync(fname, JSON.stringify(data));
}

function getPagesRecursive(offset) {
	if(offset % 1000 == 0) save();
	console.log("getting offset = "+offset);
	jsdom.env(
		"https://codeit.itdhosting.de:1337/list_games.php?start="+offset,
		[],
		function(err, window) {
			if(err) console.log(err);
			const tbody = window.document.querySelector("table.table-game tbody");
			const lines = Array.from(tbody.querySelectorAll("tr")).map(x => Array.from(x.querySelectorAll("td")));
			//const headers = lines.shift().map(x => x.textContent);
			lines.shift();
			let done = false;
			let lastGotten = 0;
			lines.forEach(([date, map, mapSize, rounds, ranking, resources, id]) => {
				date = date.textContent;
				map = map.textContent;
				mapSize = mapSize.textContent;
				rounds = +rounds.textContent;
				ranking = Array.from(ranking.querySelectorAll("li a")).map(a => getID(a.href));
				resources = resources.textContent.trim().split(/\s+/).map(x => +x)
				id = +getID(id.querySelector("a").href);
				lastGotten = id;
				if(id <= maxDone) done = true;
				else data[id] = {date, map, mapSize, rounds, ranking, resources};
				if(id == 1) done = true;
			});
			console.log(`got id=${lastGotten}, remaining=${lastGotten - maxDone}`);
			if(!done) setTimeout(() => getPagesRecursive(offset + 20), 0);
			else save();
		}
	)
}

getPagesRecursive(0);
