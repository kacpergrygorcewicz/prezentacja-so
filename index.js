console.clear();
const cli = require("cli-color");
const express = require('express');
const app = express();
const wiadcolor = cli.xterm(103);

app.use(express.static('public'));

console.log(cli.red.bold("—————————[Statystyki]————————"))
console.log("")
console.log(
    cli.white(`Używany node.js:`),
    cli.green(process.version),
    cli.white('na'),
    cli.green(`${process.platform} ${process.arch}`)
);
console.log(
    cli.white('Pamięć:'),
    cli.green(`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}`),
    cli.white('MB')
);
console.log(
    cli.white('RSS:'),
    cli.green(`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`),
    cli.white('MB')
);
console.log("")
console.log(cli.red.bold("—————————————[Web]—————————————"))
console.log("")

app.listen(3000, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(wiadcolor("✅ Prezentacja została uruchomiona na http://localhost:3000/"));
    console.log("")
    console.log(cli.red.bold("———————————————————————————————"))
  });
