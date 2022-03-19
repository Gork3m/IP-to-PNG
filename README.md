# IP-to-PNG
Converts your IPv4 address to a 4x4 2-bit PNG which you can extract the IP from.

Run `npm install ip2png`
Example usage:
```js
const fs = require('fs')
const ip2png = require('ip2png')

ip2png.Convert("1.1.1.1").pack().pipe(fs.createWriteStream('./output.png'));
```

How does this work??. Here's a tutorial
![image](https://user-images.githubusercontent.com/67007893/159126357-4145bbb5-9749-4b1c-a339-796ea85b4392.png)


Demo: https://fed.gay/x/love.png
