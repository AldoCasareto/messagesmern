import express from 'express';
import * as goalsController from '../controllers/goal.controller.js';

export const goalRouter = express.Router();

goalRouter
  .route('/')
  .get(goalsController.fetchGoals)
  .post(goalsController.createGoal);

goalRouter
  .route('/:id')
  .get(goalsController.fetchGoal)
  .delete(goalsController.deleteGoal)
  .put(goalsController.updateGoal);
