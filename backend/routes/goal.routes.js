import express from 'express';
export const router = express.Router();
import * as goalsController from '../controllers/goal.controller.js';

router
  .route('/')
  .get(goalsController.fetchGoals)
  .post(goalsController.createGoal);

router
  .route('/:id')
  .get(goalsController.fetchGoal)
  .delete(goalsController.deleteGoal)
  .put(goalsController.updateGoal);
