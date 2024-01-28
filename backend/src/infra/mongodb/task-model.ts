import mongoose from 'mongoose';
const { Schema } = mongoose;
import { status } from '../../domain/entities/task';

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: Object.values(status),
    required: true
  }
});

export default mongoose.model('Task', TaskSchema);