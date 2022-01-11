import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

// creates an instance of the productRoute
const productRouter = express.Router();

// creates the route for the homepage, get is a method used to display a page
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    // finds all the products in the database and sends it as a response
    const products = await Product.find({});
    res.send(products);
  })
);

// creates the route for creating seed products, get is a method used to display a page but a different method is used 
productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // creates a list of products based from the seed file, insertmany is a function that adds items to the db
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

// creates the route to get a specific product, based on the id
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    // findById is a function used to find a specific id in the databse, req.params.id is coming from /:id part in the route
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      // error handling is used if an id is not found
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;