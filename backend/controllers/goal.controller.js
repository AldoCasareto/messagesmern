import Goal from '../models/goal.model.js';
import User from '../models/user.model.js';

export const createGoal = async (req, res) => {
  const { text } = req.body;

  if (!req.body.text) {
    // res.status(400);
    // throw new Error('Please add a text field');
    res.status(400).json('please include a goal');
  }
  const newGoal = await Goal.create({
    text,
    user: req.user.id,
  });

  res.status(200).json(newGoal);
};

export const fetchGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
};

export const fetchGoal = async (req, res) => {};

export const deleteGoal = async (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  const goal = await Goal.findById(id);

  console.log(`goal = `, goal);

  if (!goal) {
    return res.status(400).json({ message: 'goal not found' });
  }

  // const user = await User.findById(req.user.id);

  if (!req.user) {
    return res.status(401).json({ message: 'user not found' });
  }

  if (goal.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'user not authorized' });
  }

  await goal.remove();

  res.status(200).json({ id });
};

export const updateGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(400).json({ message: 'goal not found' });
  }

  // const user = await User.findById(req.user.id);

  if (!req.user.id) {
    return res.status(401).json({ message: 'user not found' });
  }

  if (goal.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'user not authorized' });
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedGoal);
};
