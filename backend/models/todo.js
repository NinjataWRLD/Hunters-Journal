import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Todo = model('Todo', todoSchema);

export default Todo;
