import express from 'express';
import * as goalsController from '../controllers/goal.controller.js';
import { protect } from '../middleware/authMiddleware.js';

export const goalRouter = express.Router();

goalRouter
  .route('/')
  .get(protect, goalsController.fetchGoals)
  .post(protect, goalsController.createGoal);

goalRouter
  .route('/:id')
  .delete(protect, goalsController.deleteGoal)
  .put(protect, goalsController.updateGoal);
