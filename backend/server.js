import express from 'express';
import Mongoose  from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';


const app = express();
Mongoose.connect('mongodb+srv://huyentran1112:GITisgood123$@cluster0.vxbij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
  res.send('Servers is ready')
});
app.get('/api/myproducts', (req, res) => {
  res.send(data.products);
  console.log('Products')
});
app.get('/api/myproducts/:id', (req, res) => {
  const product = data.products.find( x => x._id === req.params.id);
  if(product){
    res.send(product);
  } else {
    res.status(404).send({message: "Product not found"})
  }
});
app.use('/api/users', userRouter);
app.use((err, req, res, next)=>{
  res.status(500).send({message: err.message});
})

app.listen(port, ()=> {
  console.log('Test')
});