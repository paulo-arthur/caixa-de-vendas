const fs = require('fs');
const main_data = require('../data/data.json');

function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
};

function getJSON() {
  return main_data;
}

function writeJSON(data) {
  let stringfied_data = JSON.stringify(main_data, null, 2);
  fs.writeFileSync("./data/data.json", stringfied_data, "utf-8");
}

module.exports = {getJSON, writeJSON, capitalize};
