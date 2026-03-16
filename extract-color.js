import fs from 'fs';
import { PNG } from 'pngjs';

const paths = [
  './src/assets/images/drenergy_logo.png',
  './public/images/drenergy_logo.png'
];

let logoPath = paths.find(p => fs.existsSync(p));

if (!logoPath) {
  console.log('Logo not found');
  process.exit(1);
}

fs.createReadStream(logoPath)
  .pipe(new PNG())
  .on('parsed', function() {
    const colors = {};
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        var idx = (this.width * y + x) << 2;
        var r = this.data[idx];
        var g = this.data[idx+1];
        var b = this.data[idx+2];
        var a = this.data[idx+3];
        if (a > 100) {
          // ignore white/black
          if ((r > 240 && g > 240 && b > 240) || (r < 15 && g < 15 && b < 15)) continue;
          let hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
          colors[hex] = (colors[hex] || 0) + 1;
        }
      }
    }
    
    let sorted = Object.entries(colors).sort((a,b) => b[1] - a[1]);
    console.log("Dominant colors:", sorted.slice(0, 10));
  });
