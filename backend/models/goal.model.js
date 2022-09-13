import { model, Schema } from 'mongoose';

const goalSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a goal'],
    },
  },
  {
    timestamps: true,
  }
);

export default model('Goal', goalSchema);
