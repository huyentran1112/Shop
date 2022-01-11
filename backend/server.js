import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

// initiates the express instance
const app = express();
// connects the mongoose to the mongodb address
mongoose.connect( 'mongodb+srv://huyentran1112:GITisgood123$@cluster0.vxbij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//adds the routes and connects it to the router files
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

// error handling 
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// creates the port instance
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});