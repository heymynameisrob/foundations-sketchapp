const fs = require('fs');
const colours = require('./tokens.json').colours;

let schema = {
  "compatibleVersion": "2.0",
  "pluginVersion": "2.22",
  "colors": [],
  "gradients": [],
  "images": []
};

const hexToRgb = (hex) => {
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16) / 255)
}

Object.entries(colours).forEach((colour, key) => {
  schema.colors.push({ "name": colour[0], "red": hexToRgb(colour[1])[0], "green": hexToRgb(colour[1])[1], "blue": hexToRgb(colour[1])[2], "alpha": 1 });
})

const data = JSON.stringify(schema, 2, null);

fs.writeFile('palette.sketchpalette', data, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});