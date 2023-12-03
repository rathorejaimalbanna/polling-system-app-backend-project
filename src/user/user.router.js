
import userController from './user.controller.js';
import basicAuth from '../../middleware/basicAuth.middleware.js';

import express from 'express';

const userRouter = express.Router();
const UserController = new userController();

userRouter.post('/SignUp',UserController.addUser);
userRouter.post('/SignIn',basicAuth);


export default userRouter;