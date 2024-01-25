import { Task } from '../entities/task';

export interface IUpdateTask{
  execute: (id: unknown, taskData: unknown) => Promise<Task>
}