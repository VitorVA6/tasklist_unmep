import { Task } from '../../entities/task';

export interface CreateTask{
  execute: (taskData: Omit<Task, 'id'>) => Task
}