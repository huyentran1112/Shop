import express from 'express';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const userRouter = express.Router();

// creates the route to create a user from the seed file
userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // creates a list of products based from the seed file, insertmany is a function that adds items to the db
      const createdUsers = await User.insertMany(data.users);
      res.send({ createdUsers });
    })
  );

export default userRouter;