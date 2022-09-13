import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { protect } from '../middleware/authMiddleware.js';

export const userRouter = Router();

userRouter
  .post('/', userController.registerUser)
  .post('/login', userController.loginUser)
  .get('/userdetails', protect, userController.getUserDetails);
