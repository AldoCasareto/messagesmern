import mongoose, { model, Schema } from 'mongoose';

const goalSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
