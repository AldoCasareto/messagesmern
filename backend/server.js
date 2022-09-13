import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import { connectDb } from './config/db.js';

import { goalRouter } from './routes/goal.routes.js';
import { userRouter } from './routes/user.routes.js';

const app = express();
dotenv.config();
app.use(cors());
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
