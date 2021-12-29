import express from 'express';
import data from './data.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
  res.send('Servers is ready')
});
app.get('/api/products', (req, res) => {
  res.send(data.products);
  console.log('Products')
});

app.listen(port, ()=> {
  console.log('Test')
});