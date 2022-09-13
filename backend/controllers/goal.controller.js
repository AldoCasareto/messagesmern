import Goal from '../models/goal.model.js';

export const createGoal = async (req, res) => {
  const { text } = req.body;

  if (!req.body.text) {
    // res.status(400);
    // throw new Error('Please add a text field');
    res.status(400).json('please include a goal');
  }
  const newGoal = await Goal.create({
    text,
  });

  res.status(200).json(newGoal);
};

export const fetchGoals = async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
};

export const fetchGoal = async (req, res) => {};

export const deleteGoal = async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(400).json({ message: 'goal not found' });
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

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedGoal);
};
