import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(`req.body = `, req.body);

  if (!name || !email || !password) {
    res.status(400).json({ message: 'please add all fields' });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'user already in the system' });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'invalid user data' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await User.findOne({ email });

  console.log(user);

  const validateUser = await bcrypt.compare(password, user.password);

  if (user && validateUser) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(403).json({ message: 'invalid login credentials' });
  }
};

export const getUserDetails = async (req, res) => {
  // const { _id, name, email } = await User.findById(req.user.id);

  return await res.status(200).json(req.user);
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
