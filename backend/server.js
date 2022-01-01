import express from 'express';
import Mongoose  from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';


const app = express();
Mongoose.connect('mongodb+srv://huyentran1112:GITisgood123$@cluster0.vxbij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
  res.send('Servers is ready')
});
app.use('/api/myproducts', productRouter);
app.use('/api/users', userRouter);
app.use((err, req, res, next)=>{
  res.status(500).send({message: err.message});
})

app.listen(port, ()=> {
  console.log('Test')
});