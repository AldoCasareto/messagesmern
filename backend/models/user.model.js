import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'please add a name'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'please add an email'],
    },
    password: {
      type: String,
      required: [true, 'please add a password'],
    },
  },
  { typestamps: true }
);

export default model('User', userSchema);
