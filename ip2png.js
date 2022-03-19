const PNG = require("pngjs").PNG;
const IMAGE_SIZE = 256;
const COLORS = [
    { r: 255, g: 0, b: 0 }, // red
    { r: 0, g: 255, b: 0 }, // green
    { r: 0, g: 0, b: 255 }, // blue
    { r: 255, g: 255, b: 0 } // yellow
]
module.exports = {
    Convert: ip => {
        let bytes = ip.split(".");
        let ip_png = new PNG({
            width: IMAGE_SIZE,
            height: IMAGE_SIZE
        });
        for (let row = 0; row < bytes.length; row++) {
            let byte = parseInt(bytes[row]);
            for (let column = 0; column < 4; column++) {
                let cIndex = Math.floor((byte % (4 ** (column + 1))) / (4 ** column));
                let color = COLORS[cIndex];
                for (let y = (IMAGE_SIZE / 4) * row; y < (IMAGE_SIZE / 4) * (row + 1); y++) {
                    for (let x = (IMAGE_SIZE / 4) * column; x < (IMAGE_SIZE / 4) * (column + 1); x++) {
                        let idx = (IMAGE_SIZE * y + x) << 2;
                        ip_png.data[idx] = color.r;
                        ip_png.data[idx + 1] = color.g;
                        ip_png.data[idx + 2] = color.b;
                        ip_png.data[idx + 3] = 255;
                    }
                }
            }
        }
        return ip_png;
    }
}