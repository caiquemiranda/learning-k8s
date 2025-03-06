import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('ping');
});

app.listen(4000, () => {
  console.log('Server rodando porta: 3000');
});