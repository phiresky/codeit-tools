#!/usr/bin/env node

const jsdom = require('jsdom');

function getID(url) {
	return +url.match(/\d+$/)[0];
}
jsdom.env(
	"https://codeit.itdhosting.de:1337/statistics.php",
	["http://code.jquery.com/jquery.js"],
	function(err, window) {
		if(err) console.log(err);
		console.log(JSON.stringify(window.$("td:nth-child(2) a").toArray().map(a => ({id:getID(a.href), name:a.textContent}))));
	}
)


