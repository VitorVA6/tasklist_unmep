import { Task } from '../../entities/task';

export interface ICreateTask{
  execute: (taskData: unknown) => Promise<Task>
}