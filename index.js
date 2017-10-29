const express = require('express');
const app = express();
const config = require(`./config/${process.env.NODE_ENV}.js`);

let currentCount = 0;

if (!config.PORT) {
  process.exit(1);
}

app.use(express.static(__dirname + '/public'));

app.get('/api/counter', (req, res) => {
  res.json({
    counter: currentCount
  });
});

app.get('/api/counter/decrement', (req, res) => {
  --currentCount;
  res.status(200);
});

app.get('/api/counter/increment', (req, res) => {
  ++currentCount;
  res.status(200);
});

const server = app.listen(config.PORT, (server, args) => {
  console.log(`server started`);
  console.log(process.env);
});
