const path = require('path');
const outputPath = path.join(__dirname, 'public')

module.exports = {
  entry: './src/app.js',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  }
};