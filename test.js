const { Console } = require('console');
const fs = require('fs')
const ip2png = require('ip2png')


console.log('Enter the IP address: ')
process.stdin.on('data', async function(data) {
    const ip = data.toString().trim()
    console.log('Generating image...')
    let png = ip2png.Convert(ip);
    png.pack().pipe(fs.createWriteStream('./output.png'))
    console.log('Written to ./output.png')
    console.log('Enter another IP address: (CTRL+C to exit):');
});
