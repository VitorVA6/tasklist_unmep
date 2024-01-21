import { Task } from '../../entities/task';

export interface UpdateTask{
  execute: (taskData: Task) => Task
}